import UserProvider from "./contexts/UserContext";
import { RoutesMain } from "./routes";
import "./App.css";
import { ContactProvider } from "./contexts/ContactContext";

export const App = () => {
  return (
    <main>
      <UserProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </UserProvider>
    </main>
  );
};
