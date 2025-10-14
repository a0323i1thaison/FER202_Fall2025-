import  Button from "react-bootstrap/Button";
import "./Footer.css";

function MyFooter() {
  const author = "Sơn Design";
  const email = "sontsd170551@fpt.edu.vn";
  const linkGithub = "https://github.com/a0323i1thaison/FER202_Fall2025-";
  return (
    <footer>
      <p>Author: {author}</p>
      <p>Created by: {email} </p>
      <p>&copy; {new Date().getFullYear()} TraLTB. All rights reserved </p>
      <Button variant="link" href="" >My Link Github:{linkGithub}</Button>
    </footer>
  )
}
export default MyFooter;
