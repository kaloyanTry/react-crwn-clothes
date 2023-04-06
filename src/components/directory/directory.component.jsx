import '../category-item/category-item.component';
import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className='drectory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={categories} />
      ))}
    </div>
  );
};

export default Directory;
