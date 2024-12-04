import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getOverrideProps } from './utils';
import { Flex, Image, Rating, Text } from '@aws-amplify/ui-react';
import { getAssetPath, ASSET_PATHS } from '../utils/image-utils';

export default function ProductSmall(props) {
  const { product, overrides, ...rest } = props;
  const [image, setImage] = useState(product?.image);

  const router = useRouter();
  const routeChange = (event) => {
    event.preventDefault();
    router.push(`/product/${product?.id}`);
  };

  useEffect(() => {
    function configureImage() {
      if (product?.image) {
        setImage(product.image);
      } else {
        setImage(
          getAssetPath(ASSET_PATHS.images.productImagePlaceholder)
        );
      }
    }
    configureImage();
  }, [product]);

  return (
    <Flex
      gap="0"
      direction="column"
      width="250px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProductSmall")}
    >
      <Image
        width="250px"
        height="150px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        borderRadius="16px"
        src={image}
        className="clickable"
        onClick={(e) => {
          routeChange(e);
        }}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="15px 15px 15px 5px"
        {...getOverrideProps(overrides, "Details")}
      >
        <Text
          fontFamily="Open Sans"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="235px"
          height="49px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          className="clickable"
          children={product?.name}
          onClick={(e) => {
            routeChange(e);
          }}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Rating
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          fillColor={"rgb(117, 81, 194)"}
          value={product?.rating}
          maxValue="5"
          {...getOverrideProps(overrides, "Rating")}
        ></Rating>
        <Text
          fontFamily="Open Sans"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"$"}${product?.price}`}
          {...getOverrideProps(overrides, "Price")}
        ></Text>
      </Flex>
    </Flex>
  );
}
