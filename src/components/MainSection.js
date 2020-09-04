import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const MainSection = ({ todosCount }) =>
  (
    <section className="main">
      <VisibleTodoList />
      {
        <Footer
          todosCount={todosCount}
        />
      }
    </section>
  )

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
}

export default MainSection;