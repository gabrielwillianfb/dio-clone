import { FiThumbsUp } from "react-icons/fi";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://th.bing.com/th/id/OIP.U7487zVyYuk63dkMwV9JegHaE7?rs=1&pid=ImgDetMain" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/125851871?v=4" />
          <div>
            <h4>Gabriel Willian</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de React</h4>
          <p>
            Projeto feito no curso de Formação React Developer da DIO...
            <strong> Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript #React</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
