import Container from "react-bootstrap/Container";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Container fluid className="bg-dark text-light py-3 mt-auto text-center">
            <p className="text-light opacity-75 mb-0">
                        &copy; {currentYear} <a href="https://jcast867.github.io/" className="link-light link-underline link-underline-opacity-0" target="_blank" rel="noreferrer noopener">Jaime Castaneda</a> | All Rights Reserved
                    </p>
        </Container>
    );
}

export default Footer;