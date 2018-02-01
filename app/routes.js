/* eslint flowtype-errors/show-errors: 0 */
import React from 'react'
import { Switch, Route } from 'react-router'
import App from './routes/app'
import Activity from './routes/activity'
import Contacts from './routes/contacts'

const routes = () => (
  <App>
    <Switch>
      <Route path='/contacts' component={Contacts} />
      <Route path='/' component={Activity} />
    </Switch>
  </App>
)

export default routes
