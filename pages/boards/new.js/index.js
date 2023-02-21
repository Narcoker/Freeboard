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
} from '../../../styles/new'

export default function NewBoardPage() {
    return (
        <Box>
            <Title>게시물 등록</Title>
            <Content>
                <WriterInfoWrapper>
                    <WriterNameWrapper>
                        <Label>작성자</Label>
                        <WriterInfoInput placeholder='이름을 적어주세요.' />
                    </WriterNameWrapper>

                    <WriterPasswordWrapper>
                        <Label>비밀번호</Label>
                        <WriterInfoInput placeholder='비밀번호를 입력해주세요.' />
                    </WriterPasswordWrapper>
                </WriterInfoWrapper>

                <BoardTitleWrapper>
                    <Label>제목</Label>
                    <BoardTitleInput placeholder='제목을 입력하세요.' />
                </BoardTitleWrapper>

                <BoardContentWrapper>
                    <Label>내용</Label>
                    <BoardContentInput placeholder='내용을 입력하세요.' />
                </BoardContentWrapper>

                <AddressWrapper>
                    <Label>주소</Label>
                    <AddressNumberSearchWrapper>
                        <AddressNumber></AddressNumber>
                        <SearchButton>우편번호 검색</SearchButton>
                    </AddressNumberSearchWrapper>

                    <AddressInfoInput />
                    <AddressInfoInput />
                </AddressWrapper>

                <YoutubeWrapper>
                    <Label>유튜브</Label>
                    <YoutubeInput placeholder='링크를 복사해주세요.' />
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
                        <Radio type="radio" name="main" /> <YoutubeText>유튜브</YoutubeText>
                        <Radio type="radio" name="main" /> <PictureText>사진</PictureText>
                    </RadioWrapper>
                </SelectMainWrapper>

                <ButtonWrapper>
                    <SubmitButton type='submit'>등록하기</SubmitButton>
                </ButtonWrapper>
            </Content>
        </Box>
    );
}