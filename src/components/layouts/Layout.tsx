import LayoutContainer from "../containers";
import Navigation from "../navigation";

const Layout = ({ children }: {children: React.ReactNode }): JSX.Element => {
  return(
    <LayoutContainer id="okok">
      <Navigation />
      {children}
    </LayoutContainer>
  )
};

export default Layout;