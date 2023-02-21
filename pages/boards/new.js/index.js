import { useState } from 'react';
import {
    Box,
    Content,
    Title,
    WriterInfoWrapper,
    WriterNameWrapper,
    WriterPasswordWrapper,
    Label,
    WriterInfoInput,
    BoardTitleWrapper,
    BoardTitleInput,
    BoardContentWrapper,
    BoardContentInput,
    AddressWrapper,
    AddressNumberSearchWrapper,
    AddressNumber,
    SearchButton,
    AddressInfoInput,
    AddressInfoDetailInput,
    YoutubeWrapper,
    YoutubeInput,
    PictureWrapper,
    UploadWrapper,
    UploadPicture,
    UploadText,
    UploadPlus,
    SelectMainWrapper,
    RadioWrapper,
    Radio,
    YoutubeText,
    PictureText,
    ButtonWrapper,
    SubmitButton,
    ErrorBox,
} from '../../../styles/new'

export default function NewBoardPage() {
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [addressNumber, setAddressNumber] = useState("");
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");
    const [mainType, setMainType] = useState("youtube")

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentError, setContentError] = useState("");
    const [AddressError, setAddressError] = useState("");

    function onChangeWriter(event) {
        setWriter(event.target.value);

        if (event.target.value !== "")
            setWriterError("");
        else
            setWriterError("* 작성자를 입력해주세요.");
    }

    function onChangePassword(event) {
        setPassword(event.target.value);

        if (event.target.value !== "")
            setPasswordError("");
        else
            setPasswordError("* 비밀번호를 입력해주세요.");
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);

        if (event.target.value !== "")
            setTitleError("");
        else
            setTitleError("* 제목을 입력해주세요.");

    }

    function onChangeContent(event) {
        setContent(event.target.value);

        if (event.target.value !== "")
            setContentError("");
        else
            setContentError("* 내용을 입력해주세요.");
    }

    function onChangeAddressNumber(event) {
        setAddressNumber(event.target.value);

        if (event.target.value !== "" && address && addressDetail)
            setAddressError("");
        else
            setAddressError("* 주소를 입력해주세요.");
    }

    function onChangeAddress(event) {
        setAddress(event.target.value);

        if (event.target.value !== "" && addressNumber && addressDetail)
            setAddressError("");
        else
            setAddressError("* 주소를 입력해주세요.");
    }

    function onChangeAddressDetail(event) {
        setAddressDetail(event.target.value);

        if (event.target.value !== "" && addressNumber && address)
            setAddressError("");
        else
            setAddressError("* 주소를 입력해주세요.");
    }

    function onChangeYoutube(event) {
        setYoutubeLink(event.target.value);
    }

    function onSelectMain(event) {
        setMainType(event.target.value);
    }


    function handlerSubmit() {
        const validate = writer && password && title && content && addressNumber && address && addressDetail;

        if (validate) {
            alert("게시물을 등록하였습니다.");

            console.log("writer", writer);
            console.log("password", password);
            console.log("title", title);
            console.log("content", content);
            console.log("addressNumber", addressNumber);
            console.log("address", address);
            console.log("addressDetail", addressDetail);
            console.log("youtubeLink", youtubeLink);
            console.log("mainType", mainType);

            return;
        }

        if (!writer) {
            setWriterError("* 작성자를 입력해주세요.")
        }

        if (!password) {
            setPasswordError("* 비밀번호를 입력해주세요.")
        }

        if (!title) {
            setTitleError("* 제목을 입력해주세요");
        }

        if (!content) {
            setContentError("* 내용을 입력해주세요.");
        }

        if (!addressNumber && !address && !addressDetail) {
            setAddressError("* 주소를 입력해주세요.")
        }


    }

    return (
        <Box>
            <Title>게시물 등록</Title>
            <Content>
                <WriterInfoWrapper>
                    <WriterNameWrapper>
                        <Label>작성자</Label>
                        <WriterInfoInput type="text" placeholder='이름을 적어주세요.' onChange={onChangeWriter} />
                        <ErrorBox>{writerError}</ErrorBox>
                    </WriterNameWrapper>

                    <WriterPasswordWrapper>
                        <Label>비밀번호</Label>
                        <WriterInfoInput type="password" placeholder='비밀번호를 입력해주세요.' onChange={onChangePassword} />
                        <ErrorBox>{passwordError}</ErrorBox>
                    </WriterPasswordWrapper>
                </WriterInfoWrapper>

                <BoardTitleWrapper>
                    <Label>제목</Label>
                    <BoardTitleInput type="text" placeholder='제목을 입력하세요.' onChange={onChangeTitle} />
                    <ErrorBox>{titleError}</ErrorBox>
                </BoardTitleWrapper>

                <BoardContentWrapper>
                    <Label>내용</Label>
                    <BoardContentInput placeholder='내용을 입력하세요.' onChange={onChangeContent} />
                    <ErrorBox>{contentError}</ErrorBox>
                </BoardContentWrapper>


                <AddressWrapper>
                    <Label>주소</Label>
                    <AddressNumberSearchWrapper>
                        <AddressNumber type="text" placeholder='우편번호' onChange={onChangeAddressNumber} />
                        <SearchButton>우편번호 검색</SearchButton>
                    </AddressNumberSearchWrapper>
                    <AddressInfoInput type="text" onChange={onChangeAddress} />
                    <AddressInfoDetailInput type="text" onChange={onChangeAddressDetail} />
                    <ErrorBox>{AddressError}</ErrorBox>
                </AddressWrapper>

                <YoutubeWrapper>
                    <Label>유튜브</Label>
                    <YoutubeInput type="text" placeholder='링크를 복사해주세요.' onChange={onChangeYoutube} />
                </YoutubeWrapper>

                <PictureWrapper>
                    <Label>사진 첨부</Label>
                    <UploadWrapper>
                        <UploadPicture>
                            <UploadPlus>+</UploadPlus>
                            <UploadText>Upload</UploadText>
                        </UploadPicture>
                        <UploadPicture>
                            <UploadPlus>+</UploadPlus>
                            <UploadText>Upload</UploadText>
                        </UploadPicture>
                        <UploadPicture>
                            <UploadPlus>+</UploadPlus>
                            <UploadText>Upload</UploadText>
                        </UploadPicture>
                    </UploadWrapper>
                </PictureWrapper>

                <SelectMainWrapper>
                    <Label>메인 설정</Label>
                    <RadioWrapper>
                        <Radio type="radio" name="main" value="youtube" checked onChange={onSelectMain} /> <YoutubeText>유튜브</YoutubeText>
                        <Radio type="radio" name="main" value="picture" onChange={onSelectMain} /> <PictureText>사진</PictureText>
                    </RadioWrapper>
                </SelectMainWrapper>

                <ButtonWrapper>
                    <SubmitButton type='button' onClick={handlerSubmit}>등록하기</SubmitButton>
                </ButtonWrapper>
            </Content>
        </Box>
    );
}