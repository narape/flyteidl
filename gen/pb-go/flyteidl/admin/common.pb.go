// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/admin/common.proto

package admin // import "github.com/lyft/flyteidl/gen/pb-go/flyteidl/admin"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import core "github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
import _ "github.com/lyft/protoc-gen-validate/validate"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Encapsulation of fields that identifies a Flyte resource.
// A resource can internally have multiple versions.
type Identifier struct {
	// Name of the project the resource belongs to.
	Project string `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
	// Name of the domain the resource belongs to.
	// A domain can be considered as a subset within a specific project.
	Domain string `protobuf:"bytes,2,opt,name=domain,proto3" json:"domain,omitempty"`
	// User provided value for the resource.
	// The combination of project + domain + name uniquely identifies the resource.
	// +optional - in certain contexts - like 'List API', 'Launch plans'
	Name                 string   `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Identifier) Reset()         { *m = Identifier{} }
func (m *Identifier) String() string { return proto.CompactTextString(m) }
func (*Identifier) ProtoMessage()    {}
func (*Identifier) Descriptor() ([]byte, []int) {
	return fileDescriptor_common_a636a46e251df706, []int{0}
}
func (m *Identifier) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Identifier.Unmarshal(m, b)
}
func (m *Identifier) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Identifier.Marshal(b, m, deterministic)
}
func (dst *Identifier) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Identifier.Merge(dst, src)
}
func (m *Identifier) XXX_Size() int {
	return xxx_messageInfo_Identifier.Size(m)
}
func (m *Identifier) XXX_DiscardUnknown() {
	xxx_messageInfo_Identifier.DiscardUnknown(m)
}

var xxx_messageInfo_Identifier proto.InternalMessageInfo

func (m *Identifier) GetProject() string {
	if m != nil {
		return m.Project
	}
	return ""
}

func (m *Identifier) GetDomain() string {
	if m != nil {
		return m.Domain
	}
	return ""
}

func (m *Identifier) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

// Represents a request structure to list identifiers.
type IdentifierListRequest struct {
	// Name of the project that contains the identifiers.
	Project string `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
	// Name of the domain the identifiers belongs to within the project.
	Domain string `protobuf:"bytes,2,opt,name=domain,proto3" json:"domain,omitempty"`
	// Indicates the number of resources to be returned.
	// +optional
	Limit uint32 `protobuf:"varint,3,opt,name=limit,proto3" json:"limit,omitempty"`
	// Indicates the offset to fetch the resource from.
	// It is the responsibility of the user to pass add value of limit to offset to fetch the next set of results.
	// +optional
	Offset               uint32   `protobuf:"varint,4,opt,name=offset,proto3" json:"offset,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *IdentifierListRequest) Reset()         { *m = IdentifierListRequest{} }
func (m *IdentifierListRequest) String() string { return proto.CompactTextString(m) }
func (*IdentifierListRequest) ProtoMessage()    {}
func (*IdentifierListRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_common_a636a46e251df706, []int{1}
}
func (m *IdentifierListRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_IdentifierListRequest.Unmarshal(m, b)
}
func (m *IdentifierListRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_IdentifierListRequest.Marshal(b, m, deterministic)
}
func (dst *IdentifierListRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_IdentifierListRequest.Merge(dst, src)
}
func (m *IdentifierListRequest) XXX_Size() int {
	return xxx_messageInfo_IdentifierListRequest.Size(m)
}
func (m *IdentifierListRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_IdentifierListRequest.DiscardUnknown(m)
}

var xxx_messageInfo_IdentifierListRequest proto.InternalMessageInfo

func (m *IdentifierListRequest) GetProject() string {
	if m != nil {
		return m.Project
	}
	return ""
}

func (m *IdentifierListRequest) GetDomain() string {
	if m != nil {
		return m.Domain
	}
	return ""
}

func (m *IdentifierListRequest) GetLimit() uint32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func (m *IdentifierListRequest) GetOffset() uint32 {
	if m != nil {
		return m.Offset
	}
	return 0
}

// Represents a list of Identifiers.
type IdentifierList struct {
	// A list of identifiers.
	Entities             []*Identifier `protobuf:"bytes,1,rep,name=entities,proto3" json:"entities,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *IdentifierList) Reset()         { *m = IdentifierList{} }
func (m *IdentifierList) String() string { return proto.CompactTextString(m) }
func (*IdentifierList) ProtoMessage()    {}
func (*IdentifierList) Descriptor() ([]byte, []int) {
	return fileDescriptor_common_a636a46e251df706, []int{2}
}
func (m *IdentifierList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_IdentifierList.Unmarshal(m, b)
}
func (m *IdentifierList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_IdentifierList.Marshal(b, m, deterministic)
}
func (dst *IdentifierList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_IdentifierList.Merge(dst, src)
}
func (m *IdentifierList) XXX_Size() int {
	return xxx_messageInfo_IdentifierList.Size(m)
}
func (m *IdentifierList) XXX_DiscardUnknown() {
	xxx_messageInfo_IdentifierList.DiscardUnknown(m)
}

var xxx_messageInfo_IdentifierList proto.InternalMessageInfo

func (m *IdentifierList) GetEntities() []*Identifier {
	if m != nil {
		return m.Entities
	}
	return nil
}

// Represents a structure to fetch a single resource.
type ObjectGetRequest struct {
	// Indicates the string returned by the server that identifies a version of resource.
	Urn                  string   `protobuf:"bytes,1,opt,name=urn,proto3" json:"urn,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ObjectGetRequest) Reset()         { *m = ObjectGetRequest{} }
func (m *ObjectGetRequest) String() string { return proto.CompactTextString(m) }
func (*ObjectGetRequest) ProtoMessage()    {}
func (*ObjectGetRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_common_a636a46e251df706, []int{3}
}
func (m *ObjectGetRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ObjectGetRequest.Unmarshal(m, b)
}
func (m *ObjectGetRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ObjectGetRequest.Marshal(b, m, deterministic)
}
func (dst *ObjectGetRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ObjectGetRequest.Merge(dst, src)
}
func (m *ObjectGetRequest) XXX_Size() int {
	return xxx_messageInfo_ObjectGetRequest.Size(m)
}
func (m *ObjectGetRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ObjectGetRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ObjectGetRequest proto.InternalMessageInfo

func (m *ObjectGetRequest) GetUrn() string {
	if m != nil {
		return m.Urn
	}
	return ""
}

// Represents a request structure to retrieve a list of resources.
// Resources include: Task, Workflow, LaunchPlan
type ResourceListRequest struct {
	// id represents the unique identifier of the resource.
	Id *Identifier `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Indicates the number of resources to be returned.
	// +optional
	Limit uint32 `protobuf:"varint,2,opt,name=limit,proto3" json:"limit,omitempty"`
	// Indicates the offset to fetch the resource from.
	// It is the responsibility of the user to pass add value of limit to offset to fetch the next set of results.
	// +optional
	Offset uint32 `protobuf:"varint,3,opt,name=offset,proto3" json:"offset,omitempty"`
	// Indicates a list of filters passed as string.
	// More info on constructing filters : <Link>
	// +optional
	Filters              string   `protobuf:"bytes,4,opt,name=filters,proto3" json:"filters,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ResourceListRequest) Reset()         { *m = ResourceListRequest{} }
func (m *ResourceListRequest) String() string { return proto.CompactTextString(m) }
func (*ResourceListRequest) ProtoMessage()    {}
func (*ResourceListRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_common_a636a46e251df706, []int{4}
}
func (m *ResourceListRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ResourceListRequest.Unmarshal(m, b)
}
func (m *ResourceListRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ResourceListRequest.Marshal(b, m, deterministic)
}
func (dst *ResourceListRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ResourceListRequest.Merge(dst, src)
}
func (m *ResourceListRequest) XXX_Size() int {
	return xxx_messageInfo_ResourceListRequest.Size(m)
}
func (m *ResourceListRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ResourceListRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ResourceListRequest proto.InternalMessageInfo

func (m *ResourceListRequest) GetId() *Identifier {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *ResourceListRequest) GetLimit() uint32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func (m *ResourceListRequest) GetOffset() uint32 {
	if m != nil {
		return m.Offset
	}
	return 0
}

func (m *ResourceListRequest) GetFilters() string {
	if m != nil {
		return m.Filters
	}
	return ""
}

type EmailNotification struct {
	// The list of email addresses recipients for this notification.
	RecipientsEmail      []string `protobuf:"bytes,1,rep,name=recipients_email,json=recipientsEmail,proto3" json:"recipients_email,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *EmailNotification) Reset()         { *m = EmailNotification{} }
func (m *EmailNotification) String() string { return proto.CompactTextString(m) }
func (*EmailNotification) ProtoMessage()    {}
func (*EmailNotification) Descriptor() ([]byte, []int) {
	return fileDescriptor_common_a636a46e251df706, []int{5}
}
func (m *EmailNotification) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_EmailNotification.Unmarshal(m, b)
}
func (m *EmailNotification) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_EmailNotification.Marshal(b, m, deterministic)
}
func (dst *EmailNotification) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EmailNotification.Merge(dst, src)
}
func (m *EmailNotification) XXX_Size() int {
	return xxx_messageInfo_EmailNotification.Size(m)
}
func (m *EmailNotification) XXX_DiscardUnknown() {
	xxx_messageInfo_EmailNotification.DiscardUnknown(m)
}

var xxx_messageInfo_EmailNotification proto.InternalMessageInfo

func (m *EmailNotification) GetRecipientsEmail() []string {
	if m != nil {
		return m.RecipientsEmail
	}
	return nil
}

type PagerDutyNotification struct {
	// Currently, PagerDuty notifications leverage email to trigger a notification.
	RecipientsEmail      []string `protobuf:"bytes,1,rep,name=recipients_email,json=recipientsEmail,proto3" json:"recipients_email,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PagerDutyNotification) Reset()         { *m = PagerDutyNotification{} }
func (m *PagerDutyNotification) String() string { return proto.CompactTextString(m) }
func (*PagerDutyNotification) ProtoMessage()    {}
func (*PagerDutyNotification) Descriptor() ([]byte, []int) {
	return fileDescriptor_common_a636a46e251df706, []int{6}
}
func (m *PagerDutyNotification) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PagerDutyNotification.Unmarshal(m, b)
}
func (m *PagerDutyNotification) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PagerDutyNotification.Marshal(b, m, deterministic)
}
func (dst *PagerDutyNotification) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PagerDutyNotification.Merge(dst, src)
}
func (m *PagerDutyNotification) XXX_Size() int {
	return xxx_messageInfo_PagerDutyNotification.Size(m)
}
func (m *PagerDutyNotification) XXX_DiscardUnknown() {
	xxx_messageInfo_PagerDutyNotification.DiscardUnknown(m)
}

var xxx_messageInfo_PagerDutyNotification proto.InternalMessageInfo

func (m *PagerDutyNotification) GetRecipientsEmail() []string {
	if m != nil {
		return m.RecipientsEmail
	}
	return nil
}

type SlackNotification struct {
	// Currently, Slack notifications leverage email to trigger a notification.
	RecipientsEmail      []string `protobuf:"bytes,1,rep,name=recipients_email,json=recipientsEmail,proto3" json:"recipients_email,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SlackNotification) Reset()         { *m = SlackNotification{} }
func (m *SlackNotification) String() string { return proto.CompactTextString(m) }
func (*SlackNotification) ProtoMessage()    {}
func (*SlackNotification) Descriptor() ([]byte, []int) {
	return fileDescriptor_common_a636a46e251df706, []int{7}
}
func (m *SlackNotification) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SlackNotification.Unmarshal(m, b)
}
func (m *SlackNotification) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SlackNotification.Marshal(b, m, deterministic)
}
func (dst *SlackNotification) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SlackNotification.Merge(dst, src)
}
func (m *SlackNotification) XXX_Size() int {
	return xxx_messageInfo_SlackNotification.Size(m)
}
func (m *SlackNotification) XXX_DiscardUnknown() {
	xxx_messageInfo_SlackNotification.DiscardUnknown(m)
}

var xxx_messageInfo_SlackNotification proto.InternalMessageInfo

func (m *SlackNotification) GetRecipientsEmail() []string {
	if m != nil {
		return m.RecipientsEmail
	}
	return nil
}

// Represents a structure for notifications based on execution status.
// The Notification content is configured within Admin. Future iterations could
// expose configuring notifications with custom content.
type Notification struct {
	// A list of phases to which users can associate the notifications to.
	Phases []core.WorkflowExecutionPhase `protobuf:"varint,1,rep,packed,name=phases,proto3,enum=flyteidl.core.WorkflowExecutionPhase" json:"phases,omitempty"`
	// Types that are valid to be assigned to Type:
	//	*Notification_Email
	//	*Notification_PagerDuty
	//	*Notification_Slack
	Type                 isNotification_Type `protobuf_oneof:"type"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-"`
	XXX_unrecognized     []byte              `json:"-"`
	XXX_sizecache        int32               `json:"-"`
}

func (m *Notification) Reset()         { *m = Notification{} }
func (m *Notification) String() string { return proto.CompactTextString(m) }
func (*Notification) ProtoMessage()    {}
func (*Notification) Descriptor() ([]byte, []int) {
	return fileDescriptor_common_a636a46e251df706, []int{8}
}
func (m *Notification) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Notification.Unmarshal(m, b)
}
func (m *Notification) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Notification.Marshal(b, m, deterministic)
}
func (dst *Notification) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Notification.Merge(dst, src)
}
func (m *Notification) XXX_Size() int {
	return xxx_messageInfo_Notification.Size(m)
}
func (m *Notification) XXX_DiscardUnknown() {
	xxx_messageInfo_Notification.DiscardUnknown(m)
}

var xxx_messageInfo_Notification proto.InternalMessageInfo

func (m *Notification) GetPhases() []core.WorkflowExecutionPhase {
	if m != nil {
		return m.Phases
	}
	return nil
}

type isNotification_Type interface {
	isNotification_Type()
}

type Notification_Email struct {
	Email *EmailNotification `protobuf:"bytes,2,opt,name=email,proto3,oneof"`
}

type Notification_PagerDuty struct {
	PagerDuty *PagerDutyNotification `protobuf:"bytes,3,opt,name=pager_duty,json=pagerDuty,proto3,oneof"`
}

type Notification_Slack struct {
	Slack *SlackNotification `protobuf:"bytes,4,opt,name=slack,proto3,oneof"`
}

func (*Notification_Email) isNotification_Type() {}

func (*Notification_PagerDuty) isNotification_Type() {}

func (*Notification_Slack) isNotification_Type() {}

func (m *Notification) GetType() isNotification_Type {
	if m != nil {
		return m.Type
	}
	return nil
}

func (m *Notification) GetEmail() *EmailNotification {
	if x, ok := m.GetType().(*Notification_Email); ok {
		return x.Email
	}
	return nil
}

func (m *Notification) GetPagerDuty() *PagerDutyNotification {
	if x, ok := m.GetType().(*Notification_PagerDuty); ok {
		return x.PagerDuty
	}
	return nil
}

func (m *Notification) GetSlack() *SlackNotification {
	if x, ok := m.GetType().(*Notification_Slack); ok {
		return x.Slack
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*Notification) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _Notification_OneofMarshaler, _Notification_OneofUnmarshaler, _Notification_OneofSizer, []interface{}{
		(*Notification_Email)(nil),
		(*Notification_PagerDuty)(nil),
		(*Notification_Slack)(nil),
	}
}

func _Notification_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*Notification)
	// type
	switch x := m.Type.(type) {
	case *Notification_Email:
		b.EncodeVarint(2<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Email); err != nil {
			return err
		}
	case *Notification_PagerDuty:
		b.EncodeVarint(3<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.PagerDuty); err != nil {
			return err
		}
	case *Notification_Slack:
		b.EncodeVarint(4<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Slack); err != nil {
			return err
		}
	case nil:
	default:
		return fmt.Errorf("Notification.Type has unexpected type %T", x)
	}
	return nil
}

func _Notification_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*Notification)
	switch tag {
	case 2: // type.email
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(EmailNotification)
		err := b.DecodeMessage(msg)
		m.Type = &Notification_Email{msg}
		return true, err
	case 3: // type.pager_duty
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(PagerDutyNotification)
		err := b.DecodeMessage(msg)
		m.Type = &Notification_PagerDuty{msg}
		return true, err
	case 4: // type.slack
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(SlackNotification)
		err := b.DecodeMessage(msg)
		m.Type = &Notification_Slack{msg}
		return true, err
	default:
		return false, nil
	}
}

func _Notification_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*Notification)
	// type
	switch x := m.Type.(type) {
	case *Notification_Email:
		s := proto.Size(x.Email)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case *Notification_PagerDuty:
		s := proto.Size(x.PagerDuty)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case *Notification_Slack:
		s := proto.Size(x.Slack)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

func init() {
	proto.RegisterType((*Identifier)(nil), "flyteidl.admin.Identifier")
	proto.RegisterType((*IdentifierListRequest)(nil), "flyteidl.admin.IdentifierListRequest")
	proto.RegisterType((*IdentifierList)(nil), "flyteidl.admin.IdentifierList")
	proto.RegisterType((*ObjectGetRequest)(nil), "flyteidl.admin.ObjectGetRequest")
	proto.RegisterType((*ResourceListRequest)(nil), "flyteidl.admin.ResourceListRequest")
	proto.RegisterType((*EmailNotification)(nil), "flyteidl.admin.EmailNotification")
	proto.RegisterType((*PagerDutyNotification)(nil), "flyteidl.admin.PagerDutyNotification")
	proto.RegisterType((*SlackNotification)(nil), "flyteidl.admin.SlackNotification")
	proto.RegisterType((*Notification)(nil), "flyteidl.admin.Notification")
}

func init() { proto.RegisterFile("flyteidl/admin/common.proto", fileDescriptor_common_a636a46e251df706) }

var fileDescriptor_common_a636a46e251df706 = []byte{
	// 545 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x54, 0xcb, 0x6e, 0xd3, 0x40,
	0x14, 0xad, 0xed, 0x24, 0x6d, 0x6e, 0x49, 0x48, 0x07, 0x0a, 0x56, 0x10, 0x52, 0x6a, 0x40, 0xaa,
	0x90, 0xb0, 0x45, 0x2b, 0x21, 0xb1, 0x60, 0x13, 0x51, 0x08, 0x12, 0x82, 0x6a, 0x90, 0x40, 0x62,
	0x53, 0x1c, 0xfb, 0x3a, 0x19, 0x6a, 0x7b, 0xcc, 0x78, 0x0c, 0xe4, 0x13, 0x58, 0xb0, 0x61, 0xc9,
	0x97, 0x20, 0x56, 0xfd, 0x9d, 0xfe, 0x05, 0x9a, 0x71, 0x9c, 0x57, 0x23, 0x56, 0xd9, 0xcd, 0xf5,
	0x39, 0xf7, 0x71, 0xce, 0xf5, 0x0c, 0xdc, 0x89, 0xe2, 0x89, 0x44, 0x16, 0xc6, 0x9e, 0x1f, 0x26,
	0x2c, 0xf5, 0x02, 0x9e, 0x24, 0x3c, 0x75, 0x33, 0xc1, 0x25, 0x27, 0xed, 0x0a, 0x74, 0x35, 0xd8,
	0xbd, 0x3b, 0x23, 0x07, 0x5c, 0xa0, 0x87, 0xdf, 0x31, 0x28, 0x24, 0xab, 0xe8, 0xdd, 0xdb, 0x5f,
	0xfd, 0x98, 0x85, 0xbe, 0x44, 0xaf, 0x3a, 0x94, 0x80, 0x33, 0x06, 0x78, 0x15, 0x62, 0x2a, 0x59,
	0xc4, 0x50, 0x90, 0x7b, 0xb0, 0x9d, 0x09, 0xfe, 0x19, 0x03, 0x69, 0x1b, 0x3d, 0xe3, 0xb0, 0xd9,
	0x6f, 0xfe, 0xbd, 0xbc, 0xb0, 0x6a, 0xc2, 0xec, 0x19, 0xb4, 0x42, 0xc8, 0x01, 0x34, 0x42, 0x9e,
	0xf8, 0x2c, 0xb5, 0xcd, 0x55, 0xce, 0x14, 0x20, 0x04, 0x6a, 0xa9, 0x9f, 0xa0, 0x6d, 0x29, 0x02,
	0xd5, 0x67, 0xe7, 0xa7, 0x01, 0xfb, 0xf3, 0x56, 0xaf, 0x59, 0x2e, 0x29, 0x7e, 0x29, 0x30, 0x97,
	0x1b, 0xeb, 0x7a, 0x13, 0xea, 0x31, 0x4b, 0x98, 0xd4, 0x6d, 0x5b, 0xb4, 0x0c, 0xc8, 0x2d, 0x68,
	0xf0, 0x28, 0xca, 0x51, 0xda, 0x35, 0xfd, 0x79, 0x1a, 0x39, 0x03, 0x68, 0x2f, 0x8f, 0x43, 0x9e,
	0xc0, 0x8e, 0x8a, 0x25, 0xc3, 0xdc, 0x36, 0x7a, 0xd6, 0xe1, 0xee, 0x51, 0xd7, 0x5d, 0xb6, 0xd9,
	0x9d, 0x67, 0xd0, 0x19, 0xd7, 0xb9, 0x0f, 0x9d, 0xb7, 0x43, 0x35, 0xe4, 0x4b, 0x9c, 0x69, 0xea,
	0x80, 0x55, 0x88, 0xb4, 0xd4, 0x43, 0xd5, 0xd1, 0xf9, 0x61, 0xc0, 0x0d, 0x8a, 0x39, 0x2f, 0x44,
	0x80, 0x8b, 0xea, 0x1f, 0x82, 0xc9, 0x42, 0x4d, 0xfc, 0x7f, 0x3f, 0x93, 0x85, 0x73, 0x85, 0xe6,
	0x7a, 0x85, 0xd6, 0xa2, 0x42, 0x62, 0xc3, 0x76, 0xc4, 0x62, 0x89, 0x22, 0xd7, 0xd2, 0x9b, 0xb4,
	0x0a, 0x1d, 0x0a, 0x7b, 0x27, 0x89, 0xcf, 0xe2, 0x37, 0x5c, 0x15, 0x0f, 0x7c, 0xf5, 0xa7, 0x90,
	0x67, 0xd0, 0x11, 0x18, 0xb0, 0x8c, 0x61, 0x2a, 0xf3, 0x33, 0x54, 0xb8, 0xb6, 0xa1, 0xd9, 0x27,
	0xca, 0xeb, 0xd6, 0x2f, 0x03, 0x76, 0x0c, 0xdb, 0x70, 0x6a, 0xc2, 0xfc, 0x64, 0xd0, 0xeb, 0x73,
	0xae, 0x2e, 0xe5, 0xbc, 0x87, 0xfd, 0x53, 0x7f, 0x84, 0xe2, 0x79, 0x21, 0x27, 0x9b, 0xac, 0x4b,
	0x61, 0xef, 0x5d, 0xec, 0x07, 0xe7, 0x9b, 0xac, 0xf9, 0xdb, 0x84, 0x6b, 0x2b, 0xf5, 0x1a, 0xd9,
	0xd8, 0xcf, 0xa7, 0x8b, 0x6f, 0x1f, 0x3d, 0x98, 0x2f, 0x42, 0xdd, 0x27, 0xf7, 0x03, 0x17, 0xe7,
	0x51, 0xcc, 0xbf, 0x9d, 0x54, 0xf7, 0xea, 0x54, 0xb1, 0xe9, 0x34, 0x89, 0x3c, 0x85, 0x7a, 0x39,
	0x83, 0xa9, 0xd7, 0x78, 0xb0, 0xba, 0xc6, 0x2b, 0x66, 0x0f, 0xb6, 0x68, 0x99, 0x41, 0x5e, 0x00,
	0x64, 0xca, 0xb6, 0xb3, 0xb0, 0x90, 0x13, 0xbd, 0xc0, 0xdd, 0xc5, 0xee, 0x65, 0xfe, 0x5a, 0x63,
	0x07, 0x5b, 0xb4, 0x99, 0x55, 0x80, 0x1a, 0x21, 0x57, 0x36, 0xe9, 0x55, 0xaf, 0x19, 0xe1, 0x8a,
	0x87, 0x6a, 0x04, 0x9d, 0xd1, 0x6f, 0x41, 0x4d, 0x4e, 0x32, 0x24, 0xf5, 0x3f, 0x97, 0x17, 0x96,
	0xd1, 0x3f, 0xfe, 0xf8, 0x78, 0xc4, 0xe4, 0xb8, 0x18, 0xba, 0x01, 0x4f, 0xbc, 0x78, 0x12, 0x49,
	0x6f, 0xf6, 0xb8, 0x8c, 0x30, 0xf5, 0xb2, 0xe1, 0xa3, 0x11, 0xf7, 0x96, 0x1f, 0xa7, 0x61, 0x43,
	0x3f, 0x27, 0xc7, 0xff, 0x02, 0x00, 0x00, 0xff, 0xff, 0xbc, 0xf1, 0xee, 0xae, 0xb5, 0x04, 0x00,
	0x00,
}
