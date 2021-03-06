import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Canvas from './Canvas'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {RecoilRoot} from 'recoil'
import {Atoms} from './components/examples/Atoms'
import {Selectors} from './components/examples/Selectors'
import {Async} from './components/examples/Async'
import {AtomEffects} from './components/examples/AtomEffects'

ReactDOM.render(
    <RecoilRoot>
        <ChakraProvider>
            <Router>
                <Switch>
                    <Route path="/examples/atoms">
                        <Atoms />
                    </Route>
                    <Route path="/examples/selectors">
                        <Selectors />
                    </Route>
                    <Route path="/examples/async">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Async />
                        </Suspense>
                    </Route>
                    <Route path="/examples/atomEffects">
                        <Suspense fallback={<div>Loading...</div>}>
                            <AtomEffects />
                        </Suspense>
                    </Route>
                    <Route>
                        <Canvas />
                    </Route>
                </Switch>
            </Router>
        </ChakraProvider>
    </RecoilRoot>,
    document.getElementById('root'),
)
