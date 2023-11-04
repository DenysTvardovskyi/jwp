import { FC } from "react";
import { Landing as LandingLayout } from "../../layouts";
import { useTranslation } from "react-i18next";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { useParams } from "react-router-dom";

interface IProps {}

export const Project: FC<IProps> = (): JSX.Element => {
  const { t } = useTranslation();
  const { id } = useParams();

  return (
    <LandingLayout>
      <Flex gap="small" vertical>
        <Title>{t("project.title")} {id}</Title>
      </Flex>
    </LandingLayout>
  );
};