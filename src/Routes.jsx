import CircularProgress from "@material-ui/core/CircularProgress";
import React , {lazy, Suspense} from "react";
import {Switch, Route} from 'react-router-dom';

/**
 * 
 * @returns App routing
 */
export default function Routes(){
    return(
        <Suspense fallback={<CircularProgress />}>
            <Route path={} />
        </Suspense>
    )
}