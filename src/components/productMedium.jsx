import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getOverrideProps } from './utils';
import { Button, Flex, Image, Rating, Text } from '@aws-amplify/ui-react';
import { getAssetPath, ASSET_PATHS } from '../utils/image-utils';

export default function ProductMedium(props) {
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
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProductMedium")}
    >
      <Image
        width="320px"
        height="256px"
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
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "content")}
      >
        <Text
          fontFamily="Open Sans"
          fontSize="22px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.07px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
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
          width="287px"
          height="unset"
          shrink="0"
          size="default"
          fillColor={"rgb(117, 81, 194)"}
          value={product?.rating}
          maxValue="5"
          {...getOverrideProps(overrides, "Rating")}
        ></Rating>
        <Text
          fontFamily="Open Sans"
          fontSize="28px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.13px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"$"}${product?.price}`}
          {...getOverrideProps(overrides, "$99")}
        ></Text>
        <Button
          width="288px"
          height="unset"
          shrink="0"
          size="default"
          fillColor={"rgb(117, 81, 194)"}
          isDisabled={false}
          variation="primary"
          children="Add to Cart"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
