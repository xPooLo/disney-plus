import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movie/movieSlice";

const NewDisney = (props) => {
  return (
    <Container>
      <h4>New to Disney+</h4>
      <Content>
        <Wrap>
          <Link>
            <img
              src="https://variety.com/wp-content/uploads/2014/04/01-avengers-2012.jpg?w=1024"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img
              src="https://www.timecodesystems.com/wp-content/uploads/2013/07/Avengers2HDThumb.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img
              src="https://www.onmsft.com/wp-content/uploads/2018/04/infinitywar.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b1c5f8f-1cad-49ab-a42d-2465f4941bef/df7z6yu-37d5904b-4e69-4c41-b781-5cd4db7213e3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiMWM1ZjhmLTFjYWQtNDlhYi1hNDJkLTI0NjVmNDk0MWJlZlwvZGY3ejZ5dS0zN2Q1OTA0Yi00ZTY5LTRjNDEtYjc4MS01Y2Q0ZGI3MjEzZTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XQdNY04oN-7D2Fz4mwqu6msPHzqzhDx2ntY-xdYxV88"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default NewDisney;
