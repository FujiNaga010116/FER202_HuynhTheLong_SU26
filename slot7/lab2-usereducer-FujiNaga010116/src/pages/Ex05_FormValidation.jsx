import { useReducer, useEffect, useState } from 'react'
import { Card, Form, Button, Alert, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const initialState = {
  values: {
    name: '',
    email: '',
    password: '',
    confirm: ''
  },
  errors: {},
  touched: {},
  submitted: false
}

function validate(values) {
  const errors = {}

  // Name
  if (!values.name.trim()) {
    errors.name = 'Họ tên không được để trống'
  } else if (values.name.trim().length < 3) {
    errors.name = 'Họ tên phải có ít nhất 3 ký tự'
  } else if (/\d/.test(values.name)) {
    errors.name = 'Họ tên không được chứa số'
  } else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(values.name)) {
    errors.name = 'Họ tên không được chứa ký tự đặc biệt'
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!values.email.trim()) {
    errors.email = 'Email không được để trống'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Email không đúng định dạng'
  }

  // Password
  if (!values.password) {
    errors.password = 'Mật khẩu không được để trống'
  } else if (values.password.length < 6) {
    errors.password = 'Mật khẩu phải có ít nhất 6 ký tự'
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = 'Mật khẩu phải chứa ít nhất 1 chữ hoa'
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = 'Mật khẩu phải chứa ít nhất 1 chữ thường'
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = 'Mật khẩu phải chứa ít nhất 1 chữ số'
  } else if (!/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];']/.test(values.password)) {
    errors.password = 'Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt'
  }

  // Confirm Password
  if (!values.confirm) {
    errors.confirm = 'Vui lòng nhập lại mật khẩu'
  } else if (values.confirm !== values.password) {
    errors.confirm = 'Mật khẩu xác nhận không khớp'
  }

  return errors
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD': {
      const newValues = {
        ...state.values,
        [action.payload.field]: action.payload.value
      }

      return {
        ...state,
        values: newValues,
        touched: {
          ...state.touched,
          [action.payload.field]: true
        },
        errors: validate(newValues)
      }
    }

    case 'SUBMIT': {
      const errors = validate(state.values)

      return {
        ...state,
        errors,
        touched: {
          name: true,
          email: true,
          password: true,
          confirm: true
        },
        submitted: Object.keys(errors).length === 0
      }
    }

    case 'RESET':
      return initialState

    default:
      return state
  }
}

export default function Ex05_FormValidation() {
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  )

  useEffect(() => {
    if (state.submitted) {
      setShowModal(true)
    }
  }, [state.submitted])

  function getError(field) {
    return state.touched[field]
      ? state.errors[field]
      : undefined
  }

  function handleChange(e) {
    const { name, value } = e.target

    dispatch({
      type: 'SET_FIELD',
      payload: {
        field: name,
        value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    dispatch({
      type: 'SUBMIT'
    })
  }

  function handleSuccess() {
    setShowModal(false)
    navigate('/home')
  }

  return (
    <>
      <Card className="mx-auto" style={{ maxWidth: 500 }}>
        <Card.Header>
          <strong>Đăng nhập hệ thống</strong>
        </Card.Header>

        <Card.Body>

          {state.submitted && (
            <Alert variant="success">
              Dữ liệu hợp lệ!
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Họ tên</Form.Label>
              <Form.Control
                name="name"
                value={state.values.name}
                onChange={handleChange}
                isInvalid={!!getError('name')}
              />
              <Form.Control.Feedback type="invalid">
                {getError('name')}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                value={state.values.email}
                onChange={handleChange}
                isInvalid={!!getError('email')}
              />
              <Form.Control.Feedback type="invalid">
                {getError('email')}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={state.values.password}
                onChange={handleChange}
                isInvalid={!!getError('password')}
              />
              <Form.Control.Feedback type="invalid">
                {getError('password')}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirm"
                value={state.values.confirm}
                onChange={handleChange}
                isInvalid={!!getError('confirm')}
              />
              <Form.Control.Feedback type="invalid">
                {getError('confirm')}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex gap-2">
              <Button type="submit">
                Login
              </Button>

              <Button
                type="button"
                variant="secondary"
                onClick={() => dispatch({ type: 'RESET' })}
              >
                Reset
              </Button>
            </div>

          </Form>
        </Card.Body>
      </Card>

      <Modal
        show={showModal}
        onHide={handleSuccess}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Login thành công
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Chào mừng bạn đến hệ thống!
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="success"
            onClick={handleSuccess}
          >
            Vào Home
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}