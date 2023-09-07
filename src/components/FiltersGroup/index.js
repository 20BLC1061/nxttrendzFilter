import './index.css'
import {BiSearchAlt2} from 'react-icons/bi'

const FiltersGroup = props => {
  const {onChangeSearchResults, onClickClearFilters} = props

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderRatingFiltersList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {onChangeRating, activeRating} = props
      const ratingClassName =
        activeRating === rating.ratingId ? 'up-para isActive' : 'up-para'
      return (
        <li
          className="ratingsList-container"
          key={rating.ratingId}
          onClick={() => onChangeRating(rating.ratingId)}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="ratingsImage"
          />
          <p className={ratingClassName}>&up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <>
      <h1 className="filterCategory-heading">Rating</h1>
      <ul className="unorderedList">{renderRatingFiltersList()}</ul>
    </>
  )

  const renderCategoryFiltersList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(eachItem => {
      const {onChangeCategory, activeCategory} = props
      const activeCategoryClassName =
        activeCategory === eachItem.categoryId
          ? 'option-name isActive'
          : 'option-name'
      return (
        <li
          key={eachItem.name}
          onClick={() => onChangeCategory(eachItem.categoryId)}
        >
          <p className={activeCategoryClassName}>{eachItem.name}</p>
        </li>
      )
    })
  }

  const renderCategoryFilters = () => (
    <>
      <h1 className="filterCategory-heading">Category</h1>
      <ul className="unorderedList">{renderCategoryFiltersList()}</ul>
    </>
  )

  const renderSearchInput = () => {
    const {inputValue} = props
    return (
      <div className="Search-container">
        <input
          type="search"
          placeholder="search"
          className="search-bar"
          value={inputValue}
          onChange={onChangeSearchResults}
          onKeyDown={onEnterSearchInput}
        />
        <BiSearchAlt2 />
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryFilters()}
      {renderRatingFilters()}
      <button
        type="button"
        className="clearFilters-Button"
        onClick={onClickClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
