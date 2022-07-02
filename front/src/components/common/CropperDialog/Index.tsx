import React, { LegacyRef, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import "./style.css";
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";
import { ICropperDialog } from "./types";

const CropperDialog: React.FC<ICropperDialog> = ({
onChange,
field,
error,
touched,
value,
aspectRation=1/1
})=> {

    const [currentImage , setCurrentImage] = useState<string>("data:image/jpeg;base64,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")
    
    const[show, setShow] = useState<boolean>(false);
    
    const[image , setImage] = useState<string>("");
    const imgRef = useRef<HTMLImageElement>(); //Посилання на тег в моделці
    const[cropperObj, setCropperObj]=useState<Cropper>();
    
    const imgPrevRef = useRef<HTMLImageElement>();

    const handleSelectImage = (e: React.FormEvent<HTMLInputElement>) =>{
         
        let file = (e.currentTarget.files as FileList)[0];
        if(file){
            const url = URL.createObjectURL(file);
            toggleModal();
            setImage(url);
            cropperObj?.replace(url);

        }
        e.currentTarget.value = "";
    }
    const toggleModal = () => {
        setShow((prev)=> !prev); 
    }
    
    useEffect(() => {
        if(imgRef.current){
            const cropper = new Cropper(imgRef.current as HTMLImageElement , {
                viewMode: 1,
                aspectRatio: 1/1,
                preview: imgPrevRef.current
            });
            setCropperObj(cropper);
        }
    },[] );


    const handleCropperImage = () => {
        const base64 = cropperObj?.getCroppedCanvas().toDataURL() as string;
        setCurrentImage(base64);
        toggleModal();
        onChange(field, base64);
    }


    return(
        <>
        <label htmlFor="image">
            <img src={currentImage} 
            style={{cursor: "pointer"}}
            width="150"
            alt="Choose image" />
        </label>
        <input type="file" 
        className="d-none"
        id="image"
        onChange={handleSelectImage}/>
        {error && touched && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

<div className={classNames("modal fade show" , {"custom-modal": show })}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit image</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={toggleModal}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-8 col-lg-9">
                    <div className="d-flex justify-content-center">
                        <img src={image} alt="Choosed image" 
                        width="100%" 
                        ref={imgRef as LegacyRef<HTMLImageElement>}
                        />
                    </div>
                </div>
                <div className="col-md-4 col-lg-3">
                    <div className="d-flex justify-content-center">
                        <div 
                        ref={imgPrevRef as LegacyRef<HTMLImageElement>}
                        style={{
                            height: "150px",
                            width: "150px",
                            border: "1px solid silver",
                            overflow: "hidden"
                        }}>

                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleCropperImage} >
                Choose image
              </button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default CropperDialog;