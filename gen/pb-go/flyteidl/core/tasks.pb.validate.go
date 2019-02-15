// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: flyteidl/core/tasks.proto

package core

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

// Validate checks the field values on Resources with the rules defined in the
// proto definition for this message. If any rules are violated, an error is returned.
func (m *Resources) Validate() error {
	if m == nil {
		return nil
	}

	for idx, item := range m.GetRequests() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return ResourcesValidationError{
					field:  fmt.Sprintf("Requests[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetLimits() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return ResourcesValidationError{
					field:  fmt.Sprintf("Limits[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	return nil
}

// ResourcesValidationError is the validation error returned by
// Resources.Validate if the designated constraints aren't met.
type ResourcesValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ResourcesValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ResourcesValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ResourcesValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ResourcesValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ResourcesValidationError) ErrorName() string { return "ResourcesValidationError" }

// Error satisfies the builtin error interface
func (e ResourcesValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sResources.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ResourcesValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ResourcesValidationError{}

// Validate checks the field values on RuntimeMetadata with the rules defined
// in the proto definition for this message. If any rules are violated, an
// error is returned.
func (m *RuntimeMetadata) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Type

	// no validation rules for Version

	// no validation rules for Flavor

	return nil
}

// RuntimeMetadataValidationError is the validation error returned by
// RuntimeMetadata.Validate if the designated constraints aren't met.
type RuntimeMetadataValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e RuntimeMetadataValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e RuntimeMetadataValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e RuntimeMetadataValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e RuntimeMetadataValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e RuntimeMetadataValidationError) ErrorName() string { return "RuntimeMetadataValidationError" }

// Error satisfies the builtin error interface
func (e RuntimeMetadataValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sRuntimeMetadata.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = RuntimeMetadataValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = RuntimeMetadataValidationError{}

// Validate checks the field values on TaskMetadata with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *TaskMetadata) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Discoverable

	if v, ok := interface{}(m.GetRuntime()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskMetadataValidationError{
				field:  "Runtime",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetTimeout()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskMetadataValidationError{
				field:  "Timeout",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetRetries()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskMetadataValidationError{
				field:  "Retries",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for DiscoveryVersion

	// no validation rules for DeprecatedErrorMessage

	return nil
}

// TaskMetadataValidationError is the validation error returned by
// TaskMetadata.Validate if the designated constraints aren't met.
type TaskMetadataValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TaskMetadataValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TaskMetadataValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TaskMetadataValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TaskMetadataValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TaskMetadataValidationError) ErrorName() string { return "TaskMetadataValidationError" }

// Error satisfies the builtin error interface
func (e TaskMetadataValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTaskMetadata.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TaskMetadataValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TaskMetadataValidationError{}

// Validate checks the field values on TaskTemplate with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *TaskTemplate) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetId()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskTemplateValidationError{
				field:  "Id",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for Type

	if v, ok := interface{}(m.GetMetadata()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskTemplateValidationError{
				field:  "Metadata",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetInterface()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskTemplateValidationError{
				field:  "Interface",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetCustom()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskTemplateValidationError{
				field:  "Custom",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	switch m.Target.(type) {

	case *TaskTemplate_Container:

		if v, ok := interface{}(m.GetContainer()).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return TaskTemplateValidationError{
					field:  "Container",
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	return nil
}

// TaskTemplateValidationError is the validation error returned by
// TaskTemplate.Validate if the designated constraints aren't met.
type TaskTemplateValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TaskTemplateValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TaskTemplateValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TaskTemplateValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TaskTemplateValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TaskTemplateValidationError) ErrorName() string { return "TaskTemplateValidationError" }

// Error satisfies the builtin error interface
func (e TaskTemplateValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTaskTemplate.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TaskTemplateValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TaskTemplateValidationError{}

// Validate checks the field values on ContainerPort with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *ContainerPort) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for ContainerPort

	return nil
}

// ContainerPortValidationError is the validation error returned by
// ContainerPort.Validate if the designated constraints aren't met.
type ContainerPortValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ContainerPortValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ContainerPortValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ContainerPortValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ContainerPortValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ContainerPortValidationError) ErrorName() string { return "ContainerPortValidationError" }

// Error satisfies the builtin error interface
func (e ContainerPortValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sContainerPort.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ContainerPortValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ContainerPortValidationError{}

// Validate checks the field values on Container with the rules defined in the
// proto definition for this message. If any rules are violated, an error is returned.
func (m *Container) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Image

	if v, ok := interface{}(m.GetResources()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ContainerValidationError{
				field:  "Resources",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	for idx, item := range m.GetEnv() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return ContainerValidationError{
					field:  fmt.Sprintf("Env[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetConfig() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return ContainerValidationError{
					field:  fmt.Sprintf("Config[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	for idx, item := range m.GetPorts() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return ContainerValidationError{
					field:  fmt.Sprintf("Ports[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	return nil
}

// ContainerValidationError is the validation error returned by
// Container.Validate if the designated constraints aren't met.
type ContainerValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ContainerValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ContainerValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ContainerValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ContainerValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ContainerValidationError) ErrorName() string { return "ContainerValidationError" }

// Error satisfies the builtin error interface
func (e ContainerValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sContainer.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ContainerValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ContainerValidationError{}

// Validate checks the field values on Resources_ResourceEntry with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *Resources_ResourceEntry) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Name

	// no validation rules for Value

	return nil
}

// Resources_ResourceEntryValidationError is the validation error returned by
// Resources_ResourceEntry.Validate if the designated constraints aren't met.
type Resources_ResourceEntryValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e Resources_ResourceEntryValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e Resources_ResourceEntryValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e Resources_ResourceEntryValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e Resources_ResourceEntryValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e Resources_ResourceEntryValidationError) ErrorName() string {
	return "Resources_ResourceEntryValidationError"
}

// Error satisfies the builtin error interface
func (e Resources_ResourceEntryValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sResources_ResourceEntry.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = Resources_ResourceEntryValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = Resources_ResourceEntryValidationError{}
