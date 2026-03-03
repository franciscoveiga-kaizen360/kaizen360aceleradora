export interface Testimonial {
  id: string
  name: string
  clinicName: string
  city: string
  quote: string
  avatarInitials: string
  imagePath?: string // /images/testimonials/clinic-01.webp — provided by client
  isPlaceholder?: boolean // true = staging only notice
}
