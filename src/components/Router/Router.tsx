import { FC } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import * as Page from "../../pages";

interface IProps {}

export const Router: FC<IProps> = (): JSX.Element => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page.Home />} />
        <Route path="/team" element={<Page.Team />} />
        <Route path="/team/:id" element={<Page.Member />} />
        <Route path="/hackathons" element={<Page.Hackathons />} />
        <Route path="/hackathons/:id" element={<Page.Hackathon />} />
        <Route path="/projects" element={<Page.Projects />} />
        <Route path="/projects/:id" element={<Page.Project />} />
        <Route path="/contact-us" element={<Page.ContactUs />} />
        <Route path="*" element={<Page.NotFound />} />
      </Routes>
    </HashRouter>
  );
};
