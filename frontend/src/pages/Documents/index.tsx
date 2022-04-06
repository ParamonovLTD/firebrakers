import React from 'react';
import FilesList from '../../shared/components/FilesList';
import { MainContainerLandingPage } from '../../shared/GlobalStyles';
import { IFile } from '../../interfaces/File';
import { NewsTitle } from '../Home/styles';
import { FullwidthUnderline } from '../../shared/components/FullwidthUnderline';

const data: IFile[] = [
  {
    id: '1',
    body: 'Приказ об организации образовательной деятельности в учебном пункте 2 пожарно-спасательного отряда ФПС ГПС Главного управления МЧС России по Ростовской области',
    href: 'https://drive.google.com/file/d/1ac1AUzAekLHMTZY9rmzhaxu0OaAJ20T3/view?usp=sharing',
  },
  {
    id: '2',
    body: 'Лицензия на образовательную деятельность',
    href: 'https://drive.google.com/file/d/1VR7Sm2RWB7pE0cQekt3hjtMpPEY7WIao/view?usp=sharing',
  },
]

const Documents: React.FC = () => {
  return (
    <MainContainerLandingPage>
      <NewsTitle level={2}>Документы</NewsTitle>
      <FullwidthUnderline marginBottom={50} />

      <FilesList items={data}/>
    </MainContainerLandingPage>
  );
};

export default Documents;