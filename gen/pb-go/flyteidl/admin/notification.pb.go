// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/admin/notification.proto

package admin // import "github.com/lyft/flyteidl/gen/pb-go/flyteidl/admin"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Represents the Email object that is sent to a publisher/subscriber
// to forward the notification.
// Note: This is internal to Admin and doesn't need to be exposed to other components.
type EmailMessage struct {
	// The list of email addresses to receive an email with the content populated in the other fields.
	// Currently, each email recipient will receive its own email.
	// This populates the TO field.
	RecipientsEmail []string `protobuf:"bytes,1,rep,name=recipients_email,json=recipientsEmail,proto3" json:"recipients_email,omitempty"`
	// The email of the sender.
	// This populates the FROM field.
	SenderEmail string `protobuf:"bytes,2,opt,name=sender_email,json=senderEmail,proto3" json:"sender_email,omitempty"`
	// The content of the subject line.
	// This populates the SUBJECT field.
	SubjectLine string `protobuf:"bytes,3,opt,name=subject_line,json=subjectLine,proto3" json:"subject_line,omitempty"`
	// The content of the email body.
	// This populates the BODY field.
	Body string `protobuf:"bytes,4,opt,name=body,proto3" json:"body,omitempty"`
	// TODO: Remove as this is LYFT specific
	// The category of the email sender that is required for using lyft/mailer which uses jobscheduler underneath.
	Category             string   `protobuf:"bytes,5,opt,name=category,proto3" json:"category,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *EmailMessage) Reset()         { *m = EmailMessage{} }
func (m *EmailMessage) String() string { return proto.CompactTextString(m) }
func (*EmailMessage) ProtoMessage()    {}
func (*EmailMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_notification_94b1e7341e4bc1b5, []int{0}
}
func (m *EmailMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_EmailMessage.Unmarshal(m, b)
}
func (m *EmailMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_EmailMessage.Marshal(b, m, deterministic)
}
func (dst *EmailMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EmailMessage.Merge(dst, src)
}
func (m *EmailMessage) XXX_Size() int {
	return xxx_messageInfo_EmailMessage.Size(m)
}
func (m *EmailMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_EmailMessage.DiscardUnknown(m)
}

var xxx_messageInfo_EmailMessage proto.InternalMessageInfo

func (m *EmailMessage) GetRecipientsEmail() []string {
	if m != nil {
		return m.RecipientsEmail
	}
	return nil
}

func (m *EmailMessage) GetSenderEmail() string {
	if m != nil {
		return m.SenderEmail
	}
	return ""
}

func (m *EmailMessage) GetSubjectLine() string {
	if m != nil {
		return m.SubjectLine
	}
	return ""
}

func (m *EmailMessage) GetBody() string {
	if m != nil {
		return m.Body
	}
	return ""
}

func (m *EmailMessage) GetCategory() string {
	if m != nil {
		return m.Category
	}
	return ""
}

func init() {
	proto.RegisterType((*EmailMessage)(nil), "flyteidl.admin.EmailMessage")
}

func init() {
	proto.RegisterFile("flyteidl/admin/notification.proto", fileDescriptor_notification_94b1e7341e4bc1b5)
}

var fileDescriptor_notification_94b1e7341e4bc1b5 = []byte{
	// 221 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x90, 0xb1, 0x4e, 0x03, 0x31,
	0x0c, 0x86, 0x75, 0xb4, 0x20, 0x1a, 0x2a, 0x40, 0x99, 0x4e, 0x4c, 0x2d, 0x53, 0x19, 0xb8, 0x08,
	0xf5, 0x0d, 0x90, 0xd8, 0x60, 0xe9, 0xc8, 0x52, 0x25, 0x39, 0x5f, 0x30, 0xca, 0xd9, 0xa7, 0x8b,
	0x3b, 0xe4, 0xa9, 0x78, 0x45, 0x44, 0x5a, 0x5a, 0x75, 0xb3, 0xbf, 0xff, 0xf3, 0xf0, 0x5b, 0x2d,
	0xbb, 0x98, 0x05, 0xb0, 0x8d, 0xc6, 0xb6, 0x3d, 0x92, 0x21, 0x16, 0xec, 0xd0, 0x5b, 0x41, 0xa6,
	0x66, 0x18, 0x59, 0x58, 0xdf, 0xfe, 0x2b, 0x4d, 0x51, 0x1e, 0x7f, 0x2a, 0x35, 0x7f, 0xeb, 0x2d,
	0xc6, 0x0f, 0x48, 0xc9, 0x06, 0xd0, 0x4f, 0xea, 0x7e, 0x04, 0x8f, 0x03, 0x02, 0x49, 0xda, 0xc2,
	0x5f, 0x54, 0x57, 0x8b, 0xc9, 0x6a, 0xb6, 0xb9, 0x3b, 0xf1, 0x72, 0xa1, 0x97, 0x6a, 0x9e, 0x80,
	0x5a, 0x18, 0x0f, 0xda, 0xc5, 0xa2, 0x5a, 0xcd, 0x36, 0x37, 0x7b, 0x76, 0x52, 0x76, 0xee, 0x1b,
	0xbc, 0x6c, 0x23, 0x12, 0xd4, 0x93, 0x83, 0xb2, 0x67, 0xef, 0x48, 0xa0, 0xb5, 0x9a, 0x3a, 0x6e,
	0x73, 0x3d, 0x2d, 0x51, 0x99, 0xf5, 0x83, 0xba, 0xf6, 0x56, 0x20, 0xf0, 0x98, 0xeb, 0xcb, 0xc2,
	0x8f, 0xfb, 0xeb, 0xfa, 0xf3, 0x25, 0xa0, 0x7c, 0xed, 0x5c, 0xe3, 0xb9, 0x37, 0x31, 0x77, 0x62,
	0x8e, 0xb5, 0x03, 0x90, 0x19, 0xdc, 0x73, 0x60, 0x73, 0xfe, 0x09, 0x77, 0x55, 0xda, 0xaf, 0x7f,
	0x03, 0x00, 0x00, 0xff, 0xff, 0x3f, 0xe4, 0x1e, 0x88, 0x22, 0x01, 0x00, 0x00,
}