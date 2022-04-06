import React from 'react';
import { IFile } from '../../../interfaces/File';
import { FilesListItemLink } from './styles';

interface FilesListItemProps {
  item: IFile;
}

const FilesListItem: React.FC<FilesListItemProps> = ({ item }) => {
  return (
    <FilesListItemLink href={item.href} target="_blank">
      {item.body}
    </FilesListItemLink>
  );
};

export default FilesListItem;