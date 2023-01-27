import React from 'react'

interface Props {
  errors: Record<string, string>
}

export const FormErrors: React.FC<Props> = ({ errors }) => {
  const formattedErrors = Object.entries(errors)
  if (formattedErrors.length === 0) {
    return null
  }

  debugger

  return (
    <div className="mt-2 mb-3 border border-red-500 p-2 text-sm text-red-500">
      <p className="mb-2">Please fix the following errors</p>

      <ul className="pl-5">
        {formattedErrors.map(([errorPath, errorMessage]) => (
          <li key={errorPath} className="mb-1 list-disc">
            <>
              {errorPath}: {errorMessage}
            </>
          </li>
        ))}
      </ul>
    </div>
  )
}
