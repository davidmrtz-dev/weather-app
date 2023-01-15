import LayoutContainer from "../containers";

const Layout = ({ children }: {children: React.ReactNode }): JSX.Element => {
  return(
    <LayoutContainer>
      {children}
    </LayoutContainer>
  )
};

export default Layout;