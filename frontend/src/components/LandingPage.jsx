import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { 
  Sun, 
  Zap, 
  Shield, 
  Clock, 
  Star,
  Phone,
  Mail,
  MapPin,
  FileText,
  Home,
  Calculator,
  Wrench,
  Banknote,
  TrendingUp,
  Target,
  Gift,
  CheckCircle,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  Leaf,
  DollarSign,
  Calendar
} from 'lucide-react';
import { packages, testimonials, faqs, workingSteps, whyChoosePoints } from '../mock';
import { useToast } from '../hooks/use-toast';

const LandingPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Sebut Harga Dihantar!",
      description: "Terima kasih! Kami akan hubungi anda dalam 24 jam.",
    });
    setFormData({
      name: '',
      address: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const getIcon = (iconName) => {
    const icons = {
      FileText, Home, Calculator, Wrench, Banknote, TrendingUp, Target, Gift
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="h-8 w-8" /> : <Sun className="h-8 w-8" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/80 border-b border-white/20 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <Sun className="h-10 w-10 text-solar-yellow transform group-hover:rotate-180 transition-transform duration-500" />
                <div className="absolute inset-0 bg-solar-yellow/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">Ai Brique</h1>
              <Badge className="bg-eco-green/10 text-eco-green border-eco-green/20 hidden sm:block">
                Terpercaya #1
              </Badge>
            </div>
            <Button className="bg-gradient-to-r from-solar-yellow to-amber-400 hover:from-amber-400 hover:to-solar-yellow text-black font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <Phone className="h-5 w-5 mr-2" />
              Hubungi Kami
              <Sparkles className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900/10 via-purple-500/5 to-solar-yellow/10 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-solar-yellow/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-eco-green/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-10 z-10">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-solar-yellow/20 to-eco-green/20 text-gray-800 border-none px-4 py-2 text-sm font-semibold">
                  <Zap className="h-4 w-4 mr-2" />
                  JIMAT HINGGA 70% BIL ELEKTRIK
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-none tracking-tight">
                  Buat Apa Nak
                  <br />
                  <span className="bg-gradient-to-r from-solar-yellow via-amber-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
                    Membazir
                  </span>
                  <br />
                  <span className="text-4xl lg:text-5xl text-gray-700">
                    Ribuan Ringgit?
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                  Jangan biarkan kenaikan tarif TNB membebankan keluarga anda – pasang panel solar 
                  <span className="font-bold text-eco-green"> terbukti jimat hingga 70%</span> dalam 
                  <span className="font-bold text-solar-yellow"> 14 hari sahaja</span>, 
                  dengan jaminan <span className="font-bold text-electric-blue">25 tahun</span>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-solar-yellow to-amber-400 hover:from-amber-400 hover:to-solar-yellow text-black font-black text-xl px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 border-2 border-solar-yellow/20"
                >
                  <Zap className="h-6 w-6 mr-3" />
                  Dapatkan Sebut Harga PERCUMA
                  <ArrowRight className="h-5 w-5 ml-3" />
                </Button>
                
                <Button 
                  size="lg" 
                  className="bg-white/80 backdrop-blur-md border-2 border-electric-blue/30 text-electric-blue hover:bg-electric-blue hover:text-white font-bold text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  Hubungi Sekarang
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="glass-card p-6 text-center group">
                  <Clock className="h-8 w-8 text-solar-yellow mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-bold text-gray-900">Pemasangan</p>
                  <p className="text-solar-yellow font-black text-lg">14 Hari</p>
                </div>
                <div className="glass-card p-6 text-center group">
                  <Shield className="h-8 w-8 text-electric-blue mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-bold text-gray-900">Jaminan</p>
                  <p className="text-electric-blue font-black text-lg">25 Tahun</p>
                </div>
                <div className="glass-card p-6 text-center group">
                  <Users className="h-8 w-8 text-eco-green mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-bold text-gray-900">Pemasangan</p>
                  <p className="text-eco-green font-black text-lg">100+ Berjaya</p>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&h=500&fit=crop" 
                  alt="Solar Panel Installation"
                  className="rounded-3xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                
                {/* Floating Statistics */}
                <div className="absolute -top-8 -left-8 glass-card p-6 animate-float">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-8 w-8 text-eco-green" />
                    <div>
                      <p className="text-2xl font-black text-eco-green">70%</p>
                      <p className="text-sm font-semibold text-gray-700">Jimat Bil</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -right-8 glass-card p-6 animate-float-delayed">
                  <div className="flex items-center space-x-3">
                    <Leaf className="h-8 w-8 text-eco-green" />
                    <div>
                      <p className="text-2xl font-black text-eco-green">100+</p>
                      <p className="text-sm font-semibold text-gray-700">Projek</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar Now Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-blue-50"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-600 border-red-200 mb-6 px-6 py-2 text-lg font-bold">
              <TrendingUp className="h-5 w-5 mr-2" />
              JANGAN TUNGGU LAGI!
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Kenapa Tidak Tunggu Lagi?
            </h2>
            <p className="text-2xl text-gray-600 font-semibold">
              Pasang Solar <span className="text-eco-green font-black">Sebelum Terlambat!</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {whyChoosePoints.map((point, index) => (
              <Card key={point.id} className="glass-card border-none hover:shadow-3xl hover:-translate-y-4 transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-solar-yellow/20 to-eco-green/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-solar-yellow/20 to-eco-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {getIcon(point.icon)}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed text-lg">{point.description}</p>
                  <div className="mt-6 text-center">
                    <Badge className={`px-4 py-1 font-bold ${
                      index === 0 ? 'bg-red-500/10 text-red-600 border-red-200' :
                      index === 1 ? 'bg-eco-green/10 text-eco-green border-eco-green/20' :
                      'bg-electric-blue/10 text-electric-blue border-electric-blue/20'
                    }`}>
                      {index === 0 ? 'URGENT' : index === 1 ? 'PROFITABLE' : 'LIMITED TIME'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-solar-yellow/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-eco-green/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Bagaimana <span className="bg-gradient-to-r from-solar-yellow to-amber-400 bg-clip-text text-transparent">Ia Berfungsi?</span>
            </h2>
            <p className="text-2xl text-gray-300 font-semibold">Proses mudah dalam 5 langkah sahaja</p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {workingSteps.map((step, index) => (
                <div key={step.id} className="relative group">
                  <Card className="glass-card-dark border-white/20 hover:border-solar-yellow/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                    <CardHeader className="text-center pb-6">
                      <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-solar-yellow to-amber-400 rounded-full flex items-center justify-center text-black font-black text-2xl mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                        {step.id}
                        <div className="absolute inset-0 bg-solar-yellow/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      </div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-solar-yellow transition-colors duration-300">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-center text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {index < workingSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-8 w-8 text-solar-yellow animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-96 h-96 bg-solar-yellow/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-eco-green/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-electric-blue/10 to-purple-500/10 text-electric-blue border-electric-blue/20 mb-6 px-6 py-3 text-lg font-bold">
              <Award className="h-5 w-5 mr-2" />
              PAKEJ TERBAIK MALAYSIA
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Pilih <span className="bg-gradient-to-r from-solar-yellow to-amber-500 bg-clip-text text-transparent">Pakej Terbaik</span>
            </h2>
            <p className="text-2xl text-gray-600 font-semibold">Pakej lengkap dengan jaminan dan sokongan penuh</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className={`relative overflow-hidden transition-all duration-500 hover:-translate-y-6 group ${
                  pkg.popular 
                    ? 'glass-card-premium ring-4 ring-solar-yellow/30 shadow-3xl scale-105' 
                    : 'glass-card hover:shadow-2xl'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-solar-yellow to-amber-400 text-black text-center py-3 font-black text-sm tracking-widest">
                      ⭐ PALING POPULAR ⭐
                    </div>
                  </div>
                )}
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electric-blue/20 to-purple-500/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                
                <CardHeader className="text-center pb-8 relative z-10" style={{ paddingTop: pkg.popular ? '4rem' : '2rem' }}>
                  <CardTitle className="text-3xl font-black text-gray-900 mb-4">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-5xl font-black bg-gradient-to-r from-electric-blue to-purple-600 bg-clip-text text-transparent">
                      {pkg.price}
                    </div>
                    <p className="text-xl text-gray-600 font-semibold">{pkg.power}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-eco-green/5 rounded-lg">
                      <Shield className="h-6 w-6 text-eco-green flex-shrink-0" />
                      <span className="text-gray-700 font-semibold">Jaminan {pkg.warranty}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-electric-blue/5 rounded-lg">
                      <Home className="h-6 w-6 text-electric-blue flex-shrink-0" />
                      <span className="text-gray-700 font-semibold">{pkg.suitableFor}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-solar-yellow/5 rounded-lg">
                      <Calendar className="h-6 w-6 text-solar-yellow flex-shrink-0" />
                      <span className="text-gray-700 font-semibold">Pemasangan 14 Hari</span>
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-solar-yellow to-amber-400 text-black hover:from-amber-400 hover:to-solar-yellow'
                        : 'bg-gradient-to-r from-electric-blue to-purple-600 text-white hover:from-purple-600 hover:to-electric-blue'
                    }`}
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Pilih Pakej Ini
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-electric-blue to-purple-600 hover:from-purple-600 hover:to-electric-blue text-white font-black text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300"
            >
              <Gift className="h-6 w-6 mr-3" />
              Bandingkan & Mohon Tawaran Eksklusif
              <ArrowRight className="h-5 w-5 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-solar-yellow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-eco-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Apa Kata <span className="bg-gradient-to-r from-eco-green to-emerald-400 bg-clip-text text-transparent">Pelanggan Kami?</span>
            </h2>
            <p className="text-2xl text-gray-300 font-semibold">100+ pemasangan berjaya di Malaysia – terbukti!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="glass-card-dark border-white/20 hover:border-eco-green/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-eco-green/20 to-emerald-400/20 rounded-full blur-xl transform translate-x-12 -translate-y-12"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-eco-green/30 group-hover:ring-eco-green/50 transition-all duration-300"
                      />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-eco-green rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-gray-300 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-solar-yellow text-solar-yellow" />
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg group-hover:text-white transition-colors duration-300">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="glass-card p-6 bg-eco-green/10 border-eco-green/20">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-3 mb-2">
                        <span className="text-red-400 line-through font-bold text-xl">{testimonial.beforeBill}</span>
                        <ArrowRight className="h-5 w-5 text-eco-green" />
                        <span className="text-eco-green font-black text-2xl">{testimonial.afterBill}</span>
                      </div>
                      <p className="text-sm text-gray-300 font-semibold">Bil bulanan</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-electric-blue/10 to-purple-500/10 text-electric-blue border-electric-blue/20 mb-6 px-6 py-3 text-lg font-bold">
              FAQ
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Soalan <span className="bg-gradient-to-r from-electric-blue to-purple-600 bg-clip-text text-transparent">Lazim</span>
            </h2>
            <p className="text-2xl text-gray-600 font-semibold">Jawapan kepada soalan yang selalu ditanya</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`} className="glass-card border-none rounded-2xl overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 text-left text-xl font-bold text-gray-900 hover:text-electric-blue transition-colors duration-300 no-underline">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {faq.id}
                      </div>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-700 leading-relaxed text-lg">
                    <div className="pl-12">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-24 bg-gradient-to-br from-solar-yellow/10 via-amber-50 to-orange-100/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-solar-yellow/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-eco-green/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="bg-gradient-to-r from-solar-yellow/20 to-amber-400/20 text-amber-800 border-amber-300 mb-6 px-6 py-3 text-lg font-bold">
              <Zap className="h-5 w-5 mr-2" />
              DAPATKAN SEBUT HARGA PERCUMA
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Mohon Sebut Harga dan <span className="bg-gradient-to-r from-solar-yellow to-amber-500 bg-clip-text text-transparent">Jimat Bil Elektrik</span> Anda Sekarang
            </h2>
            <p className="text-2xl text-gray-700 font-semibold">Isi maklumat anda dan dapatkan sebut harga percuma dalam 24 jam</p>
          </div>

          <Card className="max-w-3xl mx-auto glass-card-premium border-none shadow-3xl">
            <CardContent className="p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-lg font-bold text-gray-900">Nama Penuh *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="border-2 border-gray-200 focus:border-solar-yellow rounded-xl p-4 text-lg transition-all duration-300"
                      placeholder="Masukkan nama penuh anda"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-lg font-bold text-gray-900">Nombor Telefon *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="border-2 border-gray-200 focus:border-solar-yellow rounded-xl p-4 text-lg transition-all duration-300"
                      placeholder="+60 123 456 789"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-lg font-bold text-gray-900">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="border-2 border-gray-200 focus:border-solar-yellow rounded-xl p-4 text-lg transition-all duration-300"
                    placeholder="nama@email.com"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="address" className="text-lg font-bold text-gray-900">Alamat/Poskod *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    required
                    className="border-2 border-gray-200 focus:border-solar-yellow rounded-xl p-4 text-lg transition-all duration-300"
                    placeholder="Alamat lengkap dan poskod"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-lg font-bold text-gray-900">Mesej Tambahan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="border-2 border-gray-200 focus:border-solar-yellow rounded-xl p-4 text-lg transition-all duration-300"
                    placeholder="Beritahu kami tentang keperluan anda, jenis bumbung, atau soalan lain..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-solar-yellow to-amber-400 hover:from-amber-400 hover:to-solar-yellow text-black font-black text-2xl py-6 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300"
                >
                  <Zap className="h-6 w-6 mr-3" />
                  Hantar Permohonan Sebut Harga PERCUMA
                  <Sparkles className="h-6 w-6 ml-3" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-solar-yellow/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6 md:col-span-2">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Sun className="h-12 w-12 text-solar-yellow" />
                  <div className="absolute inset-0 bg-solar-yellow/20 rounded-full blur-xl"></div>
                </div>
                <h3 className="text-4xl font-black">Ai Brique</h3>
                <Badge className="bg-eco-green/20 text-eco-green border-eco-green/30">
                  Terpercaya #1
                </Badge>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Pembekal panel solar terkemuka di Malaysia dengan 100+ pemasangan berjaya dan jaminan 25 tahun. 
                Kami komited untuk membantu keluarga Malaysia menjimatkan kos elektrik dan menjaga alam sekitar.
              </p>
              
              <div className="flex space-x-4">
                <div className="glass-card-dark p-4 rounded-xl">
                  <p className="text-2xl font-black text-eco-green">100+</p>
                  <p className="text-sm text-gray-300">Projek Siap</p>
                </div>
                <div className="glass-card-dark p-4 rounded-xl">
                  <p className="text-2xl font-black text-solar-yellow">25</p>
                  <p className="text-sm text-gray-300">Tahun Jaminan</p>
                </div>
                <div className="glass-card-dark p-4 rounded-xl">
                  <p className="text-2xl font-black text-electric-blue">70%</p>
                  <p className="text-sm text-gray-300">Jimat Bil</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-solar-yellow">Perkhidmatan</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">• Pemasangan Panel Solar</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">• Penyelenggaraan & Servis</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">• Konsultasi Percuma</li>
                <li className="hover:text-white transition-colors duration-200 cursor-pointer">• Jaminan & Waranti</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-eco-green">Hubungi Kami</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Phone className="h-5 w-5 text-solar-yellow group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:text-white transition-colors duration-200">+60 3-1234 5678</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Mail className="h-5 w-5 text-solar-yellow group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:text-white transition-colors duration-200">info@aibrique.my</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <MapPin className="h-5 w-5 text-solar-yellow group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:text-white transition-colors duration-200">Kuala Lumpur, Malaysia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-center md:text-left">&copy; 2024 Ai Brique. Hak cipta terpelihara.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Badge className="bg-eco-green/20 text-eco-green border-eco-green/30">100% Mesra Alam</Badge>
              <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">Teknologi Terkini</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;