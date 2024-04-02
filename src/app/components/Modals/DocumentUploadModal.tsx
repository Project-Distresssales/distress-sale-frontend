'use client';

import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import API from "@/constants/api.constant";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { Backdrop, IconButton } from '@mui/material'
import React from 'react'
import axios, { AxiosProgressEvent } from "axios";
import { ZoomInOut } from "../Transitions/Transitions";
import { useDropzone } from "react-dropzone";
import { sliceText } from "@/helpers";
import Assets from "@/constants/assets.constant";
import Image from "next/image";


const DocumentUploadModal = ({ showmodal, setIsModal }: any) => {
  const [documents, setFiles] = useState<any>(null);
  const [urls, setUrls] = useState<string[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [buttonText, setButtonText] = useState("Click to Upload");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.png', '.gif'],
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt'],
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    },
  });
  

  const handleProgress = (progressEvent: { loaded: number; total?: number | undefined }) => {
    const percentage = Math.round(
      (progressEvent.loaded * 100) / (progressEvent.total || 1),
    );
    setUploadProgress(percentage);
  };


  const uploadImages = async () => {
    const uploadedUrls: string[] = [];

    if (!documents || documents.length === 0) {
      console.error('No documents selected for upload.');
      return; // Prevent unnecessary processing
    }

    setIsUploading(true);

    try {
      for (const document of documents) {
        const data = new FormData();
        data.append('file', document);
        data.append('upload_preset', 'distress_sale_property_document');
        data.append('cloud_name', 'dtuims4ku');

        const response = await axios.post('https://api.cloudinary.com/v1_1/dtuims4ku/image/upload', data, {
          onUploadProgress: handleProgress,
        });

        const result = response.data;
        uploadedUrls.push(result.secure_url);
      }

      setUrls((prevUrls) => [...prevUrls, ...uploadedUrls]);
      toast.success('Document Uploaded Successfully!');
      // setButtonText("Proceed");
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    } finally {
      setIsUploading(false);
      setFiles(null);
      setUploadProgress(0);
      setButtonText("Proceed");
    }
  };

  const saveImages = () => {
    if (uploadProgress === 100) {
      localStorage.setItem('uploadedDocumentUrls', JSON.stringify(urls));
    } else {
      uploadImages();
    }
  }

  const handleButton = () => {
    if(documents?.length > 0) {
      saveImages();
    } else {
      setIsModal(false);
      toast.success('Document Saved Successfuly!');
    }
  }



  const deleteFile = (name: any) => {
    let filtered: any[] = [];

    documents?.map((item: any) => {
      if (item.name != name) {
        return filtered.push(item);
      }
    });

    if (documents.length === 1) {
      setFiles(null);
      setUploadProgress(0);
      setIsUploading(false);
    } else {
      setFiles(filtered);
      setUploadProgress(0);
    }
  };

  const deleteImageFromUrls = (urlToDelete: string) => {
    setUrls((prevUrls) => prevUrls.filter((url) => url !== urlToDelete));
  };

  // Save URLs to local storage when uploads complete
  useEffect(() => {
    localStorage.setItem('uploadedDocumentUrls', JSON.stringify(urls));
  }, [urls]);


  return (
    <Backdrop
      open={showmodal}
      transitionDuration={500}
      sx={{
        zIndex: 999,
      }}
    >
      <ZoomInOut target={showmodal} className="fixed h-full top-0 left-0 right-0 md:w-full w-[90%] flex justify-center items-center mx-auto">
        <div className="relative flex flex-col items-center justify-center bg-white px-10 py-10 rounded-[8px] w-[700px] h-auto">
          <IconButton
            className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700 cursor-pointer p-4"
            onClick={() => setIsModal(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#506683" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14 8L8 14" stroke="#506683" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 8L14 14" stroke="#506683" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </IconButton>
          <h1 className="text-black md:text-[30px] text-[5vw] font-bold roboto">
            Upload Documents
          </h1>
          <div className="c-custom__upload mt-10 flex justify-center items-center">
            <div>
              {urls?.length > 0 ? (
                <>
                  <div className="flex flex-wrap gap-5 mx-auto">
                    <div {...getRootProps()} className={`border border-dashed ${isDragActive && 'border-[#2dc918]'} space-y-2 rounded-[16px] h-[100px] w-[100px] p-2 flex flex-col justify-center items-center cursor-pointer`}>
                      <MdOutlineAddPhotoAlternate style={{ fontSize: '20px' }} />
                      {isDragActive ? (
                        <p className="md:text-[14px] text-[3.5vw] font-[500]">Drop Here</p>
                      ) : (
                        <p className="md:text-[14px] text-[3.5vw] font-[500]">Add</p>
                      )}
                      
                      <input
                        accept=".jpg, .jpeg, .png"
                        {...getInputProps()}
                        className="hidden"
                      />
                    </div>
                    {urls.map((url) => (
                      <div className="relative" key={url}>
                        <Image
                        style={{border: `${url?.includes('.pdf') ? '1px solid #999' : 'transparent'}`}}
                        width={1000}
                        height={1000}
                        className="w-[100px] h-[100px] rounded-[16px] object-cover" src={url?.includes('.pdf') ? Assets.pdfLogo : url} alt={`Uploaded Image`} />
                        <IconButton className="absolute bottom-0 right-0 bg-white" onClick={() => deleteImageFromUrls(url)}>
                          <img
                            src="data:image/svg+xml,%3Csvg viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 5a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1z' fill='%23384A62'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 2a1 1 0 00-1 1v1h6V3a1 1 0 00-1-1H8zm7 2V3a3 3 0 00-3-3H8a3 3 0 00-3 3v1H3a1 1 0 00-1 1v14a3 3 0 003 3h10a3 3 0 003-3V5a1 1 0 00-1-1h-2zM4 6v13a1 1 0 001 1h10a1 1 0 001-1V6H4z' fill='%23384A62'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 9a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zM12 9a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z' fill='%23384A62'/%3E%3C/svg%3E"
                            alt=""
                            className="w-[12px] h-[12px]"
                          />
                        </IconButton>
                      </div>
                    ))}
                  </div>
                  {documents && (
                    <div className="border rounded-[16px] px-4 py-2 w-full h-auto mt-5 flex flex-wrap gap-2">
                      {isUploading && <p className="font-[500] text-[12px] text-distressBlue">Uploading documents... ({uploadProgress}%)</p>}
                      {documents && documents?.map((item: any, i: any) => (
                        <div key={i} className="flex items-center">
                          <p className="text-[12px] font-[500] mr-1">
                            {sliceText(25, item?.name)}
                          </p>
                          {!isUploading && (
                            <IconButton onClick={() => deleteFile(item?.name)}>
                              <img
                                src="data:image/svg+xml,%3Csvg viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 5a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1z' fill='%23384A62'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 2a1 1 0 00-1 1v1h6V3a1 1 0 00-1-1H8zm7 2V3a3 3 0 00-3-3H8a3 3 0 00-3 3v1H3a1 1 0 00-1 1v14a3 3 0 003 3h10a3 3 0 003-3V5a1 1 0 00-1-1h-2zM4 6v13a1 1 0 001 1h10a1 1 0 001-1V6H4z' fill='%23384A62'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 9a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zM12 9a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z' fill='%23384A62'/%3E%3C/svg%3E"
                                alt=""
                                className="w-[12px] h-[12px]"
                              />
                            </IconButton>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {documents === null ? (
                    <div
                      {...getRootProps()}
                      className={`c-modal--upload__body bg-pale-brown p-6
                    }`}
                    >
                      <div className="mx-auto">
                        <div className="mx-auto mb-3 w-full img-con">
                          <img
                            src="data:image/svg+xml,%3Csvg width='41' height='40' viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)' fill='%23506683'%3E%3Cpath d='M15.576 16.527a2.748 2.748 0 100-5.497 2.748 2.748 0 000 5.497z'/%3E%3Cpath d='M38.134 23.893a8.462 8.462 0 00-4.733-2.252V7.671c0-1.488-.61-2.824-1.565-3.816a5.333 5.333 0 00-3.817-1.565H5.882c-1.489 0-2.825.61-3.817 1.565A5.333 5.333 0 00.5 7.672V30.458c0 1.489.61 2.824 1.565 3.817a5.333 5.333 0 003.817 1.565h21.412c1.412 1.145 3.168 1.87 5.114 1.87a8.074 8.074 0 005.726-2.367 8.074 8.074 0 002.366-5.725 8.074 8.074 0 00-2.366-5.725zM2.523 7.672c0-.916.382-1.756.992-2.329a3.35 3.35 0 012.367-.992h22.137a3.35 3.35 0 012.367.992c.61.611.992 1.45.992 2.367v11.908l-5.649-5.649a1.025 1.025 0 00-1.45 0l-8.512 8.55-5.763-5.801a1.025 1.025 0 00-1.45 0l-6.031 6.106V7.672zm3.32 26.221v-.076a3.349 3.349 0 01-2.366-.993 3.483 3.483 0 01-.954-2.366v-4.733l6.756-6.794 5.763 5.764c.382.381 1.03.381 1.45 0l8.512-8.55 5.572 5.61-.343.115c-.153.038-.306.076-.496.153-.153.038-.306.114-.458.152-.115.039-.191.077-.306.153-.152.076-.267.115-.381.191l-.573.344c-.114.076-.19.114-.305.19-.077.039-.115.077-.191.115a4.604 4.604 0 00-.916.801 8.074 8.074 0 00-2.366 5.726c0 .572.076 1.107.19 1.679.038.153.077.267.115.42.114.381.229.763.381 1.145v.038c.153.305.306.649.497.916H5.844zm30.802 0a5.965 5.965 0 01-4.275 1.756 6.02 6.02 0 01-4.16-1.68c-.153-.152-.305-.343-.458-.496-.115-.114-.23-.267-.344-.381-.152-.191-.267-.42-.381-.65-.077-.152-.153-.267-.23-.42a3.224 3.224 0 01-.19-.648c-.038-.153-.115-.343-.153-.496a6.32 6.32 0 01-.114-1.222c0-1.679.687-3.168 1.755-4.274 1.07-1.107 2.596-1.756 4.275-1.756 1.68 0 3.168.687 4.275 1.756a5.966 5.966 0 011.756 4.274c0 1.642-.687 3.13-1.756 4.237z'/%3E%3Cpath d='M33.095 25.534a1.333 1.333 0 00-.343-.229c-.115-.038-.23-.076-.344-.076h-.076c-.115 0-.23.038-.344.076a.902.902 0 00-.343.23L29.278 27.9c-.381.381-.381 1.03 0 1.45.382.382 1.031.382 1.45 0l.611-.61v4.198c0 .572.459 1.03 1.031 1.03.573 0 1.03-.458 1.03-1.03V28.74l.611.61c.382.382 1.03.382 1.45 0 .382-.381.382-1.03 0-1.45l-2.366-2.367z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='40' height='40' fill='%23fff' transform='translate(.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                            alt="upload"
                            className="mx-auto w-full"
                          />
                        </div>
                        <p className="font-sf text-blue-dark text-center mb-2">
                          Drag and drop to upload <br /> or
                          <span className="text-red-light cursor-pointer">
                            {" "}
                            click here
                          </span>{" "}
                          to select documents from your system
                        </p>
                        <input
                          accept=".jpg, .jpeg, .png"
                          {...getInputProps()}
                          className="hidden"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="c-modal--upload__status p-6">
                      <div className="border rounded-[16px] px-4 py-2 w-full h-auto mt-5 flex flex-wrap gap-2">
                        {isUploading && <p className="font-[500] text-[12px] text-distressBlue">Uploading documents... ({uploadProgress}%)</p>}
                        {documents && documents?.map((item: any, i: any) => (
                          <div key={i} className="flex items-center">
                            <p className="text-[12px] font-[500] mr-1">
                              {sliceText(30, item?.name)}
                            </p>
                            {!isUploading && (
                              <IconButton onClick={() => deleteFile(item?.name)}>
                                <img
                                  src="data:image/svg+xml,%3Csvg viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 5a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1z' fill='%23384A62'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 2a1 1 0 00-1 1v1h6V3a1 1 0 00-1-1H8zm7 2V3a3 3 0 00-3-3H8a3 3 0 00-3 3v1H3a1 1 0 00-1 1v14a3 3 0 003 3h10a3 3 0 003-3V5a1 1 0 00-1-1h-2zM4 6v13a1 1 0 001 1h10a1 1 0 001-1V6H4z' fill='%23384A62'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 9a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zM12 9a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z' fill='%23384A62'/%3E%3C/svg%3E"
                                  alt=""
                                  className="w-[12px] h-[12px]"
                                />
                              </IconButton>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>



          <button
            className="text-white bg-distressBlue w-[60%] mx-auto flex justify-center items-center py-4 rounded-[8px] md:text-[16px] text-[4vw] mt-10 font-medium poppins text-center"
            type="button"
            onClick={handleButton}
          >
            {documents?.length > 0 ? 'Click to Upload' : buttonText}
          </button>
        </div>
      </ZoomInOut>
    </Backdrop >
  );
};

export default DocumentUploadModal;





