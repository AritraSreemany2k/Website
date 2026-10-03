import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
          Horizon
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-violet-600 transition-colors font-medium">Services</a>
          <a href="#work" className="text-gray-700 hover:text-violet-600 transition-colors font-medium">Work</a>
          <a href="#about" className="text-gray-700 hover:text-violet-600 transition-colors font-medium">About</a>
          <a href="#testimonials" className="text-gray-700 hover:text-violet-600 transition-colors font-medium">Testimonials</a>
          <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-violet-500/30 transition-all">
            Get in Touch
          </a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 text-2xl">
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t px-6 py-4 flex flex-col gap-4">
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">About</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Testimonials</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-medium text-center">Get in Touch</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #6d28d9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
          Available for new projects
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight mb-6">
          We craft <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">digital</span>
          <br />experiences
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          A creative agency that transforms ideas into stunning digital products. We design, build, and launch brands that stand out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#work" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-violet-500/30 transition-all hover:-translate-y-0.5">
            View Our Work
          </a>
          <a href="#contact" className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:border-violet-300 hover:text-violet-600 transition-all">
            Let's Talk
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: '150+', label: 'Projects Delivered' },
            { number: '50+', label: 'Happy Clients' },
            { number: '8+', label: 'Years Experience' },
            { number: '12', label: 'Team Members' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">{stat.number}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: 'fa-palette',
      title: 'Brand Design',
      description: 'We create memorable brand identities that resonate with your audience and stand the test of time.',
      color: 'from-pink-500 to-rose-500',
      bg: 'bg-pink-50',
    },
    {
      icon: 'fa-code',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for performance and scalability.',
      color: 'from-violet-500 to-purple-500',
      bg: 'bg-violet-50',
    },
    {
      icon: 'fa-mobile-screen-button',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences.',
      color: 'from-blue-500 to-cyan-500',
      bg: 'bg-blue-50',
    },
    {
      icon: 'fa-chart-line',
      title: 'Digital Strategy',
      description: 'Data-driven strategies that help your business grow and reach new heights in the digital landscape.',
      color: 'from-amber-500 to-orange-500',
      bg: 'bg-amber-50',
    },
    {
      icon: 'fa-camera',
      title: 'Content Creation',
      description: 'Compelling visual content and storytelling that engages your audience across all platforms.',
      color: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-50',
    },
    {
      icon: 'fa-rocket',
      title: 'Product Launch',
      description: 'End-to-end product launch support from concept to market, ensuring maximum impact.',
      color: 'from-indigo-500 to-violet-500',
      bg: 'bg-indigo-50',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Services we offer</h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">We provide comprehensive digital solutions to help your business thrive in the modern world.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${service.icon} text-xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const projects = [
    {
      title: 'Fintech Dashboard',
      category: 'Web App',
      gradient: 'from-violet-500 to-purple-600',
      icon: 'fa-chart-pie',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      gradient: 'from-pink-500 to-rose-600',
      icon: 'fa-shopping-bag',
    },
    {
      title: 'Health & Wellness App',
      category: 'Mobile App',
      gradient: 'from-emerald-500 to-teal-600',
      icon: 'fa-heart-pulse',
    },
    {
      title: 'SaaS Landing Page',
      category: 'Brand Design',
      gradient: 'from-blue-500 to-cyan-600',
      icon: 'fa-layer-group',
    },
    {
      title: 'AI Product Suite',
      category: 'Product Design',
      gradient: 'from-amber-500 to-orange-600',
      icon: 'fa-brain',
    },
    {
      title: 'Social Media Campaign',
      category: 'Digital Strategy',
      gradient: 'from-indigo-500 to-violet-600',
      icon: 'fa-bullhorn',
    },
  ];

  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Featured work</h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">A selection of our recent projects that showcase our expertise and creativity.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.gradient} overflow-hidden mb-5`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`fas ${project.icon} text-white/20 text-8xl group-hover:scale-110 transition-transform duration-500`}></i>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <i className="fas fa-arrow-right text-gray-900"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.category}</p>
                </div>
                <i className="fas fa-arrow-up-right-from-square text-gray-400 group-hover:text-violet-600 transition-colors"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">We're a team of passionate creators</h2>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Founded in 2016, Horizon has grown from a small design studio into a full-service digital agency. We believe in the power of great design and technology to transform businesses and create meaningful connections.
            </p>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              Our diverse team brings together expertise in design, development, strategy, and marketing to deliver holistic solutions that drive real results.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-check text-violet-600"></i>
                </div>
                <span className="text-gray-700 font-medium">User-Centered Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-check text-violet-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Agile Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-check text-violet-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Data-Driven Strategy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-check text-violet-600"></i>
                </div>
                <span className="text-gray-700 font-medium">Continuous Support</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-violet-100 to-indigo-100 p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-violet-600">98%</div>
                  <div className="text-gray-500 text-sm mt-1">Client Satisfaction</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg mt-8">
                  <div className="text-3xl font-bold text-indigo-600">24/7</div>
                  <div className="text-gray-500 text-sm mt-1">Support Available</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600">5x</div>
                  <div className="text-gray-500 text-sm mt-1">Average ROI</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg mt-8">
                  <div className="text-3xl font-bold text-pink-600">100%</div>
                  <div className="text-gray-500 text-sm mt-1">On-Time Delivery</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-violet-400 to-indigo-400 rounded-2xl opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Horizon transformed our vision into reality. Their attention to detail and creative approach exceeded all our expectations. The team was professional, responsive, and truly cared about our success.',
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GreenLeaf',
      content: 'Working with Horizon was a game-changer for our business. They didn\'t just build us a website—they created an experience that our customers love. Our conversions increased by 300%.',
      avatar: '👨‍💻',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, Bloom',
      content: 'The team at Horizon brings a perfect blend of creativity and technical expertise. They understood our brand from day one and delivered a product that truly represents who we are.',
      avatar: '👩‍🎨',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-violet-300 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">What our clients say</h2>
          <p className="text-violet-200 text-lg mt-4 max-w-2xl mx-auto">Don't just take our word for it — hear from some of our amazing clients.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <i key={j} className="fas fa-star text-amber-400 text-sm"></i>
                ))}
              </div>
              <p className="text-white/90 leading-relaxed mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-violet-300 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Let's start a project together</h2>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Have an idea? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-envelope text-violet-600"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email us</div>
                  <div className="text-gray-900 font-medium">hello@horizon.agency</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-phone text-violet-600"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Call us</div>
                  <div className="text-gray-900 font-medium">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-location-dot text-violet-600"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Visit us</div>
                  <div className="text-gray-900 font-medium">123 Creative Ave, San Francisco, CA</div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              {['fa-twitter', 'fa-instagram', 'fa-linkedin-in', 'fa-dribbble'].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-violet-100 hover:text-violet-600 transition-all">
                  <i className={`fab ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 md:p-10">
              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 flex items-center gap-3">
                  <i className="fas fa-check-circle"></i>
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all bg-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all bg-white"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all bg-white resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-violet-500/30 transition-all hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Horizon
            </a>
            <p className="text-gray-400 mt-4 leading-relaxed max-w-sm">
              We're a creative digital agency helping brands stand out in the digital world. Let's create something amazing together.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a href="#services" className="block text-gray-400 hover:text-violet-400 transition-colors">Services</a>
              <a href="#work" className="block text-gray-400 hover:text-violet-400 transition-colors">Portfolio</a>
              <a href="#about" className="block text-gray-400 hover:text-violet-400 transition-colors">About</a>
              <a href="#contact" className="block text-gray-400 hover:text-violet-400 transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">Brand Design</a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">Web Development</a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">Mobile Apps</a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">Digital Strategy</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 Horizon Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
