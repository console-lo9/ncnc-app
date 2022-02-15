import { useRouter } from 'next/router';
import BrandItems from 'components/Brand/BrandItems';

//  brands

const BrandId = () => {
    const router = useRouter();
    const brandId = Number(router.query.brandId);

    return <BrandItems conCategoryId={67} brandId={brandId} />;
};

export default BrandId;
