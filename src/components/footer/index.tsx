import { AlignItems, Container } from "./styles";

function FooterComponent() {
    return (
        <Container>
            <AlignItems>
                <span style={{ color: '#fff' }}>© Clientes Frontend™. All Rights Reserved.</span>
            </AlignItems>
        </Container >
    );
}

export default FooterComponent;