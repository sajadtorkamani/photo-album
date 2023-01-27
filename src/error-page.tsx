import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

// This page wil handle all errors since its errorElement for the root route.
// You can obtain more info about the type of error by using the useRouteError hook.
export const ErrorPage: React.FC = () => {
  const error = useRouteError()

  function renderErrorMessage() {
    if (isRouteErrorResponse(error)) {
      return error.statusText
    }

    if (error instanceof Error) {
      return error.message
    }

    return 'Unknown error'
  }

  return (
    <div className="mt-12 mb-4 text-center">
      <h1 className="mb-4 text-2xl font-bold">Oops!</h1>
      <p className="mb-3 text-gray-600">
        Sorry, an unexpected error has occurred.
      </p>

      {isRouteErrorResponse(error) && (
        <p>
          <i>{renderErrorMessage()}</i>
        </p>
      )}
    </div>
  )
}
