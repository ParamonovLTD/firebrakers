import React, { memo } from 'react';
import { Feature } from '../../../interfaces/Feature';
import { MainContainerLandingPage } from '../../GlobalStyles';
import FeatureItem from '../FeatureItem';
import { FeaturesRow } from './styles';

interface FeaturesProps {
  features: Feature[]
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <MainContainerLandingPage>
      <FeaturesRow>
        {features.map(feature => (
          <FeatureItem
            feature={feature}
            key={feature.id}
          />
        ))}
      </FeaturesRow>

    </MainContainerLandingPage>
  );
};

export default memo(Features);