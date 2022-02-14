import { useRouter } from 'next/router';

//  brands

const BrandItems = () => {
    const router = useRouter();

    const brandId = router.query.brandId;

    return <div>BrandItems</div>;
};

export default BrandItems;
