import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';

const ImagePicker = ({ setImageSrcFunction, width, height }) => {




    const onChange = (e) => {
        setImageSrcFunction(e)
    }

    const imagePickerConfig = {
        borderRadius: '8px',
        language: 'en',
        width: width / 4,
        height: height / 4,
        objectFit: 'cover',
        compressInitial: null,
    };
    return (
        <>
            <ReactImagePickerEditor
                config={imagePickerConfig}
                imageSrcProp={""}
                imageChanged={(newDataUri) => { onChange(newDataUri) }} />
        </>
    )
}

export default ImagePicker
