import styled from "@emotion/styled";

export const Box = styled.form`
    * {
        box-sizing: border-box;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    background-color: white;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

`;

export const Content = styled.div`
    width: 996px;
`

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin: 80px 0;
`;

export const WriterInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom : 40px;
`;

export const WriterNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const WriterPasswordWrapper = WriterNameWrapper;

export const Label = styled.span`
    margin-bottom: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`;

export const WriterInfoInput = styled.input`
    width: 486px;
    height: 52px;
    border: 1px solid #BDBDBD;
`;

export const BoardTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom : 40px;
`
export const BoardTitleInput = styled.input`
    width: 100%;
    height: 52px;
    border: 1px solid #BDBDBD;
`

export const BoardContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom : 16px;
`;

export const BoardContentInput = styled.textarea`
    width: 100%;
    height: 480px;
    border: 1px solid #BDBDBD;
`

export const AddressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 37px;
`;

export const AddressNumberSearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;

`;
export const AddressNumber = styled.input`
    width: 77px;
    height: 52px;
    border: 1px solid #BDBDBD;
    margin-right: 16px;
    
`;
export const SearchButton = styled.button`
    width: 124px;
    height: 52px;
    background: #000000;
    color: white;
    cursor: pointer;
    `;
export const AddressLabel = styled.input`
    width: 996px;
    height: 52px;
    margin-bottom: 16px;

`;
export const AddressInfoInput = styled.input`
    width: 996px;
    height: 52px;
    margin-bottom: 37px;
    border: 1px solid #BDBDBD;

`;

export const AddressInfoDetailInput = styled.input`
    width: 996px;
    height: 52px;
    border: 1px solid #BDBDBD;

`;

export const YoutubeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const YoutubeInput = styled.input`
    width: 996px;
    height: 45.78px;
    margin-bottom: 40px;
    border: 1px solid #BDBDBD;
`;

export const PictureWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;

export const UploadWrapper = styled.div`
    display: flex;
`

export const UploadPicture = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 78px;
    height: 78px;
    background: #BDBDBD;
    margin-right: 24px;
`;

export const UploadPlus = styled.span`
    color: #4F4F4F;
    font-weight: 500;
    font-size: 20px;
`;

export const UploadText = styled.span`
    color: #4F4F4F;
    font-weight: 500;
    font-size: 12px;
`;

export const SelectMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const RadioWrapper = styled.div`
    margin-bottom: 80px;
`;

export const Radio = styled.input`
    accent-color: #FFD600;
`;

export const YoutubeText = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    margin-right: 18px;
`;

export const PictureText = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const SubmitButton = styled.button`
    width: 179px;
    height: 52px;
    background: #FFD600;
    border: 0;
    font-family:Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 100px;
    cursor: pointer;
`;

export const ErrorBox = styled.div`
    margin-top: 10px;
    color: red;
    font-size: 12px;
`;


