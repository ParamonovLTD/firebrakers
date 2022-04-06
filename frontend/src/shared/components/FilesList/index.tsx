import React from 'react';
import { IFile } from '../../../interfaces/File';
import FilesListItem from '../FilesListItem';
import { FilesListWrapper, FilesSpace } from './styles';

interface FilesListProps {
  items: IFile[]
}

const FilesList: React.FC<FilesListProps> = ({ items }) => {
  return (
    <FilesListWrapper>
      <FilesSpace direction='vertical' size='large'>
        {items.map(item => (
          <FilesListItem item={item} key={item.id} />
        ))}
      </FilesSpace>
    </FilesListWrapper>
  );
};

export default FilesList;