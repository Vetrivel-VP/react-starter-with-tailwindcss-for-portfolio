import React from "react";
import { ServiceCard } from "../components";
import {useTranslation } from 'react-i18next'


const ServiceCount = () => {
  const {t} = useTranslation()
  return (
  <div className="w-full py-6 lg:py-16 mt-24 flex items-center justify-center flex-wrap gap-8 pl-7">
    <ServiceCard count={"1M+"} text={t('hapS')} />
    <ServiceCard count={"50+"} text={t('hapC')}  />
    <ServiceCard count={"50+"} text={t('fsProject')} />
    <ServiceCard count={"100+"} text={t('pProject')} />
    </div>
  );
};

export default ServiceCount;
