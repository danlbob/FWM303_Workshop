import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getOverrideProps } from './utils';
import {
  Button,
  Flex,
  Image,
  Rating,
  SelectField,
  Text,
} from '@aws-amplify/ui-react';
import { getAssetPath, ASSET_PATHS } from '../utils/image-utils';

export default function ProductLarge(props) {
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
      gap="40px"
      direction="row"
      width="857px"
      height="356px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProductLarge")}
    >
      <Image
        width="424px"
        height="356px"
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
        gap="15px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="5px 5px 5px 5px"
        {...getOverrideProps(overrides, "Details")}
      >
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
          size="large"
          fillColor={"rgb(117, 81, 194)"}
          value={product?.rating}
          maxValue="5"
          {...getOverrideProps(overrides, "Rating")}
        ></Rating>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "PriceFrame")}
        >
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.05px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Price:"
            {...getOverrideProps(overrides, "PriceLabel")}
          ></Text>
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.05px"
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
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "InventoryFrame")}
        >
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.05px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Items currently in stock:"
            {...getOverrideProps(overrides, "InventoryLabel")}
          ></Text>
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.05px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={product?.current_stock}
            {...getOverrideProps(overrides, "Inventory")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="274px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Order")}
        >
          <SelectField
            width="132px"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "Quantity")}
          ></SelectField>
          <Button
            width="132px"
            height="unset"
            shrink="0"
            size="default"
            fillColor={"rgb(117, 81, 194)"}
            isDisabled={false}
            variation="primary"
            children="Add to Cart"
            {...getOverrideProps(overrides, "AddToCart")}
          ></Button>
        </Flex>
        <Text
          fontFamily="Open Sans"
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={product?.description}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </Flex>
    </Flex>
  );
}
