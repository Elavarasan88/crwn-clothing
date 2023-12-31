import CategoryItem from "../category-item/category-item.component";
import "./directory.style.scss"
const Directory = ({categories}) =>(
    <div className = "directory-container" >
          {
            categories.map((category)=>(
              <CategoryItem  key = {categories.id} category = {category}/>
            ))
          }
    </div>
)

export default Directory;