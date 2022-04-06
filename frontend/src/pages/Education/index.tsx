import React from 'react';
import { IFile } from '../../interfaces/File';
import FilesList from '../../shared/components/FilesList';
import { MainContainerLandingPage } from '../../shared/GlobalStyles';
import { NewsTitle } from '../Home/styles';
import { FullwidthUnderline } from '../../shared/components/FullwidthUnderline';

const data: IFile[] = [
  {
    id: '1',
    body: 'Полевой справочник лесного пожарного',
    href: 'https://drive.google.com/file/d/1nEn6gRzI40tQ0jCnY2gEf5hpfFTekU8E/view?usp=sharing',
  },
  {
    id: '2',
    body: 'Пожарно-техническое вооружение. Устройство и применение',
    href: 'https://drive.google.com/file/d/1OnCwl4eAmYL2fLXWJVBLHqS9vqEZEGGl/view?usp=sharing',
  },
  {
    id: '3',
    body: 'Справочник начальника караула пожарной части',
    href: 'https://drive.google.com/file/d/1oUcq5dTT9oy1mVzh863vMd652idySmgP/view?usp=sharing',
  },
  {
    id: '4',
    body: 'Боевой устав. ПРИКАЗ от 16 октября 2017 года N 444',
    href: 'https://drive.google.com/file/d/1o0pu02s8YVCdf01M421hIKyw6U6L7cQo/view?usp=sharing',
  },
  {
    id: '5',
    body: 'Охрана труда. ПРИКАЗ от 11 декабря 2020 года N 881н',
    href: 'https://drive.google.com/file/d/1b1pTXz1ScGckY1HrsG9x8zY1qORCtPIl/view?usp=sharing',
  },
  {
    id: '6',
    body: 'СПРАВОЧНИК СПАСАТЕЛЯ',
    href: 'https://drive.google.com/file/d/11j-bqJQfVYCZ7VlFLq9lIK5vL8yOxitk/view?usp=sharing',
  },
  {
    id: '7',
    body: 'Устав подразделений',
    href: 'https://docs.google.com/document/d/1KYGWgP9S0HCFTxlSH85RotMvWjZAR5kR/edit?usp=sharing&ouid=101905368394800007751&rtpof=true&sd=true',
  },
]

const Education: React.FC = () => {
  return (
    <MainContainerLandingPage>
      <NewsTitle level={2}>Образование</NewsTitle>
      <FullwidthUnderline marginBottom={50} />

      <FilesList items={data}/>
    </MainContainerLandingPage>
  );
};

export default Education;