import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vw;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url("https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Bkd2lsbGlhbW1vcnJpcy0xMDYtbmFwLmpwZw.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;

const Form = styled.form`
display: flex;
  flex-wrap: wrap;
  `;

const Title = styled.h1`
font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 50%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
  
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Đăng ký</Title>
                <Form>
                    <Input placeholder="Tên" />
                    <Input placeholder="Họ" />
                    <Input placeholder="Tài khoản" />
                    <Input placeholder="Email" />
                    <Input placeholder="Mật khẩu" />
                    <Input placeholder="Nhập lại mật khẩu" />
                    <Agreement>
                        Tôi đồng ý với mọi <b> CHÍNH SÁCH BẢO MẬT</b>
                    </Agreement>
                    <Button>Đăng ký</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register