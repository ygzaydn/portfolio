import React from "react";
import { FirebaseContext } from "./index";

export const withFirebaseConsumer = (Component) => {
  const WithFirebaseConsumer = (props) => (
    <FirebaseContext.Consumer>
      {(firebase) => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );
  return WithFirebaseConsumer;
};
