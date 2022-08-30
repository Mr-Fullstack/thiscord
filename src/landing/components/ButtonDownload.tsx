import { Btn } from '@/components/Btn/Btn'
import { IconInstallBrowser, IconInstallMobile, IconInstallDesktop } from '@/components/Icon/Icon'
import { appLanguage } from '@/contexts/LanguageProvider';
import { ButtonDownloadProps } from '@/types';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export function ButtonDownload({ platform, ...props }: ButtonDownloadProps) {
  const { t } = appLanguage();
  const navigate = useNavigate()

  const btn_download = {
    "ios": <Btn title={t('download_ios')} bgColor='secondary_9' onClick={() => navigate('signin', { replace: true })} {...props} > <IconInstallMobile /> </Btn>,
    "android": <Btn title={t('download_android')} onClick={() => navigate('signin', { replace: true })} {...props} > <IconInstallMobile /> </Btn>,
    "desktop": <Btn title={t('download_desktop')} onClick={() => navigate('signin', { replace: true })} {...props} > <IconInstallDesktop /> </Btn>,
    "web": <Btn title={t('download_web')} bgColor='primary_1' onClick={() => navigate('signin', { replace: true })}{...props} > <IconInstallBrowser /> </Btn>
  }
  return (
    <React.Fragment>
      {btn_download[platform]}
    </React.Fragment>
  )
}
