// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: flyteidl/admin/common.proto

package admin

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"strings"
	"time"
	"unicode/utf8"

	"github.com/golang/protobuf/ptypes"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = ptypes.DynamicAny{}
)

// Validate checks the field values on Identifier with the rules defined in the
// proto definition for this message. If any rules are violated, an error is returned.
func (m *Identifier) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetProject()) < 1 {
		return IdentifierValidationError{
			field:  "Project",
			reason: "value length must be at least 1 bytes",
		}
	}

	if len(m.GetDomain()) < 1 {
		return IdentifierValidationError{
			field:  "Domain",
			reason: "value length must be at least 1 bytes",
		}
	}

	// no validation rules for Name

	return nil
}

// IdentifierValidationError is the validation error returned by
// Identifier.Validate if the designated constraints aren't met.
type IdentifierValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e IdentifierValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e IdentifierValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e IdentifierValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e IdentifierValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e IdentifierValidationError) ErrorName() string { return "IdentifierValidationError" }

// Error satisfies the builtin error interface
func (e IdentifierValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sIdentifier.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = IdentifierValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = IdentifierValidationError{}

// Validate checks the field values on IdentifierListRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *IdentifierListRequest) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetProject()) < 1 {
		return IdentifierListRequestValidationError{
			field:  "Project",
			reason: "value length must be at least 1 bytes",
		}
	}

	if len(m.GetDomain()) < 1 {
		return IdentifierListRequestValidationError{
			field:  "Domain",
			reason: "value length must be at least 1 bytes",
		}
	}

	// no validation rules for Limit

	// no validation rules for Offset

	return nil
}

// IdentifierListRequestValidationError is the validation error returned by
// IdentifierListRequest.Validate if the designated constraints aren't met.
type IdentifierListRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e IdentifierListRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e IdentifierListRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e IdentifierListRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e IdentifierListRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e IdentifierListRequestValidationError) ErrorName() string {
	return "IdentifierListRequestValidationError"
}

// Error satisfies the builtin error interface
func (e IdentifierListRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sIdentifierListRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = IdentifierListRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = IdentifierListRequestValidationError{}

// Validate checks the field values on IdentifierList with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *IdentifierList) Validate() error {
	if m == nil {
		return nil
	}

	for idx, item := range m.GetEntities() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return IdentifierListValidationError{
					field:  fmt.Sprintf("Entities[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	return nil
}

// IdentifierListValidationError is the validation error returned by
// IdentifierList.Validate if the designated constraints aren't met.
type IdentifierListValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e IdentifierListValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e IdentifierListValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e IdentifierListValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e IdentifierListValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e IdentifierListValidationError) ErrorName() string { return "IdentifierListValidationError" }

// Error satisfies the builtin error interface
func (e IdentifierListValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sIdentifierList.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = IdentifierListValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = IdentifierListValidationError{}

// Validate checks the field values on ObjectGetRequest with the rules defined
// in the proto definition for this message. If any rules are violated, an
// error is returned.
func (m *ObjectGetRequest) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Urn

	return nil
}

// ObjectGetRequestValidationError is the validation error returned by
// ObjectGetRequest.Validate if the designated constraints aren't met.
type ObjectGetRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ObjectGetRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ObjectGetRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ObjectGetRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ObjectGetRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ObjectGetRequestValidationError) ErrorName() string { return "ObjectGetRequestValidationError" }

// Error satisfies the builtin error interface
func (e ObjectGetRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sObjectGetRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ObjectGetRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ObjectGetRequestValidationError{}

// Validate checks the field values on ResourceListRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *ResourceListRequest) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetId()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ResourceListRequestValidationError{
				field:  "Id",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for Limit

	// no validation rules for Offset

	// no validation rules for Filters

	return nil
}

// ResourceListRequestValidationError is the validation error returned by
// ResourceListRequest.Validate if the designated constraints aren't met.
type ResourceListRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ResourceListRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ResourceListRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ResourceListRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ResourceListRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ResourceListRequestValidationError) ErrorName() string {
	return "ResourceListRequestValidationError"
}

// Error satisfies the builtin error interface
func (e ResourceListRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sResourceListRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ResourceListRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ResourceListRequestValidationError{}

// Validate checks the field values on EmailNotification with the rules defined
// in the proto definition for this message. If any rules are violated, an
// error is returned.
func (m *EmailNotification) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetRecipientsEmail()) < 1 {
		return EmailNotificationValidationError{
			field:  "RecipientsEmail",
			reason: "value must contain at least 1 item(s)",
		}
	}

	_EmailNotification_RecipientsEmail_Unique := make(map[string]struct{}, len(m.GetRecipientsEmail()))

	for idx, item := range m.GetRecipientsEmail() {
		_, _ = idx, item

		if _, exists := _EmailNotification_RecipientsEmail_Unique[item]; exists {
			return EmailNotificationValidationError{
				field:  fmt.Sprintf("RecipientsEmail[%v]", idx),
				reason: "repeated value must contain unique items",
			}
		} else {
			_EmailNotification_RecipientsEmail_Unique[item] = struct{}{}
		}

		if err := m._validateEmail(item); err != nil {
			return EmailNotificationValidationError{
				field:  fmt.Sprintf("RecipientsEmail[%v]", idx),
				reason: "value must be a valid email address",
				cause:  err,
			}
		}

	}

	return nil
}

func (m *EmailNotification) _validateHostname(host string) error {
	s := strings.ToLower(strings.TrimSuffix(host, "."))

	if len(host) > 253 {
		return errors.New("hostname cannot exceed 253 characters")
	}

	for _, part := range strings.Split(s, ".") {
		if l := len(part); l == 0 || l > 63 {
			return errors.New("hostname part must be non-empty and cannot exceed 63 characters")
		}

		if part[0] == '-' {
			return errors.New("hostname parts cannot begin with hyphens")
		}

		if part[len(part)-1] == '-' {
			return errors.New("hostname parts cannot end with hyphens")
		}

		for _, r := range part {
			if (r < 'a' || r > 'z') && (r < '0' || r > '9') && r != '-' {
				return fmt.Errorf("hostname parts can only contain alphanumeric characters or hyphens, got %q", string(r))
			}
		}
	}

	return nil
}

func (m *EmailNotification) _validateEmail(addr string) error {
	a, err := mail.ParseAddress(addr)
	if err != nil {
		return err
	}
	addr = a.Address

	if len(addr) > 254 {
		return errors.New("email addresses cannot exceed 254 characters")
	}

	parts := strings.SplitN(addr, "@", 2)

	if len(parts[0]) > 64 {
		return errors.New("email address local phrase cannot exceed 64 characters")
	}

	return m._validateHostname(parts[1])
}

// EmailNotificationValidationError is the validation error returned by
// EmailNotification.Validate if the designated constraints aren't met.
type EmailNotificationValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e EmailNotificationValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e EmailNotificationValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e EmailNotificationValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e EmailNotificationValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e EmailNotificationValidationError) ErrorName() string {
	return "EmailNotificationValidationError"
}

// Error satisfies the builtin error interface
func (e EmailNotificationValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sEmailNotification.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = EmailNotificationValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = EmailNotificationValidationError{}

// Validate checks the field values on PagerDutyNotification with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *PagerDutyNotification) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetRecipientsEmail()) < 1 {
		return PagerDutyNotificationValidationError{
			field:  "RecipientsEmail",
			reason: "value must contain at least 1 item(s)",
		}
	}

	_PagerDutyNotification_RecipientsEmail_Unique := make(map[string]struct{}, len(m.GetRecipientsEmail()))

	for idx, item := range m.GetRecipientsEmail() {
		_, _ = idx, item

		if _, exists := _PagerDutyNotification_RecipientsEmail_Unique[item]; exists {
			return PagerDutyNotificationValidationError{
				field:  fmt.Sprintf("RecipientsEmail[%v]", idx),
				reason: "repeated value must contain unique items",
			}
		} else {
			_PagerDutyNotification_RecipientsEmail_Unique[item] = struct{}{}
		}

		if err := m._validateEmail(item); err != nil {
			return PagerDutyNotificationValidationError{
				field:  fmt.Sprintf("RecipientsEmail[%v]", idx),
				reason: "value must be a valid email address",
				cause:  err,
			}
		}

	}

	return nil
}

func (m *PagerDutyNotification) _validateHostname(host string) error {
	s := strings.ToLower(strings.TrimSuffix(host, "."))

	if len(host) > 253 {
		return errors.New("hostname cannot exceed 253 characters")
	}

	for _, part := range strings.Split(s, ".") {
		if l := len(part); l == 0 || l > 63 {
			return errors.New("hostname part must be non-empty and cannot exceed 63 characters")
		}

		if part[0] == '-' {
			return errors.New("hostname parts cannot begin with hyphens")
		}

		if part[len(part)-1] == '-' {
			return errors.New("hostname parts cannot end with hyphens")
		}

		for _, r := range part {
			if (r < 'a' || r > 'z') && (r < '0' || r > '9') && r != '-' {
				return fmt.Errorf("hostname parts can only contain alphanumeric characters or hyphens, got %q", string(r))
			}
		}
	}

	return nil
}

func (m *PagerDutyNotification) _validateEmail(addr string) error {
	a, err := mail.ParseAddress(addr)
	if err != nil {
		return err
	}
	addr = a.Address

	if len(addr) > 254 {
		return errors.New("email addresses cannot exceed 254 characters")
	}

	parts := strings.SplitN(addr, "@", 2)

	if len(parts[0]) > 64 {
		return errors.New("email address local phrase cannot exceed 64 characters")
	}

	return m._validateHostname(parts[1])
}

// PagerDutyNotificationValidationError is the validation error returned by
// PagerDutyNotification.Validate if the designated constraints aren't met.
type PagerDutyNotificationValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e PagerDutyNotificationValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e PagerDutyNotificationValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e PagerDutyNotificationValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e PagerDutyNotificationValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e PagerDutyNotificationValidationError) ErrorName() string {
	return "PagerDutyNotificationValidationError"
}

// Error satisfies the builtin error interface
func (e PagerDutyNotificationValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPagerDutyNotification.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = PagerDutyNotificationValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = PagerDutyNotificationValidationError{}

// Validate checks the field values on SlackNotification with the rules defined
// in the proto definition for this message. If any rules are violated, an
// error is returned.
func (m *SlackNotification) Validate() error {
	if m == nil {
		return nil
	}

	if len(m.GetRecipientsEmail()) < 1 {
		return SlackNotificationValidationError{
			field:  "RecipientsEmail",
			reason: "value must contain at least 1 item(s)",
		}
	}

	_SlackNotification_RecipientsEmail_Unique := make(map[string]struct{}, len(m.GetRecipientsEmail()))

	for idx, item := range m.GetRecipientsEmail() {
		_, _ = idx, item

		if _, exists := _SlackNotification_RecipientsEmail_Unique[item]; exists {
			return SlackNotificationValidationError{
				field:  fmt.Sprintf("RecipientsEmail[%v]", idx),
				reason: "repeated value must contain unique items",
			}
		} else {
			_SlackNotification_RecipientsEmail_Unique[item] = struct{}{}
		}

		if err := m._validateEmail(item); err != nil {
			return SlackNotificationValidationError{
				field:  fmt.Sprintf("RecipientsEmail[%v]", idx),
				reason: "value must be a valid email address",
				cause:  err,
			}
		}

	}

	return nil
}

func (m *SlackNotification) _validateHostname(host string) error {
	s := strings.ToLower(strings.TrimSuffix(host, "."))

	if len(host) > 253 {
		return errors.New("hostname cannot exceed 253 characters")
	}

	for _, part := range strings.Split(s, ".") {
		if l := len(part); l == 0 || l > 63 {
			return errors.New("hostname part must be non-empty and cannot exceed 63 characters")
		}

		if part[0] == '-' {
			return errors.New("hostname parts cannot begin with hyphens")
		}

		if part[len(part)-1] == '-' {
			return errors.New("hostname parts cannot end with hyphens")
		}

		for _, r := range part {
			if (r < 'a' || r > 'z') && (r < '0' || r > '9') && r != '-' {
				return fmt.Errorf("hostname parts can only contain alphanumeric characters or hyphens, got %q", string(r))
			}
		}
	}

	return nil
}

func (m *SlackNotification) _validateEmail(addr string) error {
	a, err := mail.ParseAddress(addr)
	if err != nil {
		return err
	}
	addr = a.Address

	if len(addr) > 254 {
		return errors.New("email addresses cannot exceed 254 characters")
	}

	parts := strings.SplitN(addr, "@", 2)

	if len(parts[0]) > 64 {
		return errors.New("email address local phrase cannot exceed 64 characters")
	}

	return m._validateHostname(parts[1])
}

// SlackNotificationValidationError is the validation error returned by
// SlackNotification.Validate if the designated constraints aren't met.
type SlackNotificationValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e SlackNotificationValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e SlackNotificationValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e SlackNotificationValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e SlackNotificationValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e SlackNotificationValidationError) ErrorName() string {
	return "SlackNotificationValidationError"
}

// Error satisfies the builtin error interface
func (e SlackNotificationValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sSlackNotification.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = SlackNotificationValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = SlackNotificationValidationError{}

// Validate checks the field values on Notification with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *Notification) Validate() error {
	if m == nil {
		return nil
	}

	switch m.Type.(type) {

	case *Notification_Email:

		if v, ok := interface{}(m.GetEmail()).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return NotificationValidationError{
					field:  "Email",
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	case *Notification_PagerDuty:

		if v, ok := interface{}(m.GetPagerDuty()).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return NotificationValidationError{
					field:  "PagerDuty",
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	case *Notification_Slack:

		if v, ok := interface{}(m.GetSlack()).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return NotificationValidationError{
					field:  "Slack",
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	default:
		return NotificationValidationError{
			field:  "Type",
			reason: "value is required",
		}

	}

	return nil
}

// NotificationValidationError is the validation error returned by
// Notification.Validate if the designated constraints aren't met.
type NotificationValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e NotificationValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e NotificationValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e NotificationValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e NotificationValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e NotificationValidationError) ErrorName() string { return "NotificationValidationError" }

// Error satisfies the builtin error interface
func (e NotificationValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sNotification.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = NotificationValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = NotificationValidationError{}
