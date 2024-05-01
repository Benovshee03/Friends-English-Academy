/**
 * Login request type
 */
export interface LoginModel {
    username: string;
    password: string;
  }
  export interface RegisterModel {
    username: string;
    firstname:string;
    lastname:string;
    email:string;
    password: string;
  }
  
  export interface LoginState {
    result: {
      status: "idle" | "loading" | "succeeded" | "failed";
      statusCode: number;
      message: string;
      token: string;
      username:string
    };
  }
  
  export interface AuthContextType {
    loginAuth: (username: string, password: string) => Promise<void>;
    logoutAuth: () => void;
    registerAuth:(username:string,firstname:string,lastname:string,email:string,password:string)=>Promise<void>
  }