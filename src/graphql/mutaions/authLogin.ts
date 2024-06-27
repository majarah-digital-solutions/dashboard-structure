import { gql } from "@apollo/client";
export default gql`
  mutation AdminAuthLogin($loginData: LoginInput) {
    login: adminAuthLogin(loginData: $loginData) {
      _id
      fullname
      avatarUrl
      phoneNumber
      token
    }
  }
`;
