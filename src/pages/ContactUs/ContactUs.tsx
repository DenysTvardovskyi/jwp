import { FC } from "react";
import { Landing as LandingLayout } from "../../layouts";
import { useTranslation } from "react-i18next";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";

interface IProps {}

export const ContactUs: FC<IProps> = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <LandingLayout>
      <Flex gap="small" vertical>
        <Title>{t("contactUs.title")}</Title>
      </Flex>
    </LandingLayout>
  );
};