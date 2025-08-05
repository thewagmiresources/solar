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
  Calendar,
  ThumbsUp,
  Heart,
  AlertTriangle,
  Timer,
  CreditCard,
  Percent,
  PiggyBank,
  Coins,
  ShieldCheck,
  BadgeCheck,
  Crown,
  Fire
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
    <div className="min-h-screen bg-white">
      {/* Floating Announcement Bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-3 px-4 relative overflow-hidden">
        <div className="animate-pulse">
          <span className="font-bold">🔥 TAWARAN TERHAD! </span>
          <span>Jimat sehingga RM15,000 dengan rebat kerajaan sebelum 31 Disember 2024!</span>
        </div>
      </div>

      {/* Header */}
      <header className="backdrop-blur-md bg-white/95 border-b border-gray-100 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <Sun className="h-10 w-10 text-solar-yellow transform group-hover:rotate-180 transition-transform duration-500" />
                <div className="absolute inset-0 bg-solar-yellow/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">Ai Brique</h1>
                <p className="text-xs text-gray-600">Solar Terpercaya Malaysia</p>
              </div>
              <div className="flex space-x-2">
                <Badge className="bg-green-500 text-white">⭐ 5.0 Rating</Badge>
                <Badge className="bg-blue-500 text-white">100+ Projek</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold text-gray-900">Hubungi PERCUMA</p>
                <p className="text-lg font-bold text-electric-blue">+60 3-1234 5678</p>
              </div>
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-pulse">
                <Phone className="h-5 w-5 mr-2" />
                Call SEKARANG
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Customer Focused */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Urgent Alert */}
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 p-4 rounded-lg">
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
                  <div>
                    <p className="font-bold text-red-700">AMARAN: Harga elektrik naik 25% tahun ini!</p>
                    <p className="text-sm text-red-600">Jangan biarkan bil elektrik anda terus membengkak!</p>
                  </div>
                </div>
              </div>

              {/* Main Headline - Emotional */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-7xl font-black text-gray-900 leading-none">
                  <span className="text-red-600">STOP</span> Membazir
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                    RM2,000-5,000
                  </span>
                  <br />
                  <span className="text-3xl lg:text-5xl text-gray-700">Setiap Tahun!</span>
                </h1>
                
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
                  <p className="text-xl lg:text-2xl text-gray-800 font-semibold leading-relaxed">
                    Keluarga Malaysia telah menjimatkan <span className="font-black text-green-600">RM50,000+</span> 
                    dengan panel solar kami. Kini giliran anda untuk menikmati 
                    <span className="font-black text-blue-600"> elektrik PERCUMA</span> selama 25+ tahun!
                  </p>
                </div>
              </div>

              {/* Money-Back Guarantee */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 p-6 rounded-xl">
                <div className="flex items-center space-x-4">
                  <ShieldCheck className="h-16 w-16 text-green-500" />
                  <div>
                    <h3 className="text-xl font-bold text-green-700">100% JAMINAN WANG KEMBALI</h3>
                    <p className="text-green-600">Jika anda tidak jimat dalam 12 bulan, kami pulangkan wang sepenuhnya!</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-black text-xl px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 animate-bounce"
                >
                  <Gift className="h-6 w-6 mr-3" />
                  DAPATKAN REBAT RM15,000 SEKARANG!
                  <ArrowRight className="h-6 w-6 ml-3" />
                </Button>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Calculator className="h-5 w-5 mr-3" />
                  Kalkulator Jimat Percuma
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white/80 rounded-xl shadow-lg">
                  <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <p className="font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-600">Satisfied</p>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-xl shadow-lg">
                  <Timer className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="font-bold text-gray-900">14 Hari</p>
                  <p className="text-sm text-gray-600">Pemasangan</p>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-xl shadow-lg">
                  <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="font-bold text-gray-900">25 Tahun</p>
                  <p className="text-sm text-gray-600">Jaminan</p>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-xl shadow-lg">
                  <BadgeCheck className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="font-bold text-gray-900">Lesen</p>
                  <p className="text-sm text-gray-600">SEDA</p>
                </div>
              </div>
            </div>

            {/* Right Side - Social Proof */}
            <div className="space-y-6">
              {/* Main Image with Overlay */}
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&h=500&fit=crop" 
                  alt="Solar Panel Installation"
                  className="rounded-3xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
                
                {/* Customer Testimonial Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                      alt="Customer"
                      className="w-12 h-12 rounded-full border-2 border-green-400"
                    />
                    <div>
                      <p className="font-bold text-gray-900">Ahmad Razak</p>
                      <p className="text-sm text-gray-600">Shah Alam</p>
                    </div>
                    <div className="flex space-x-1 ml-auto">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-800 font-medium">"Alhamdulillah! Dah 2 tahun pasang solar, bil elektrik dari RM600 turun jadi RM80 sahaja. Balik modal dalam 4 tahun!"</p>
                  <div className="mt-3 text-center">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold mr-2">Sebelum: RM600</span>
                    <ArrowRight className="inline h-4 w-4 mx-2" />
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">Sekarang: RM80</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white">
                  <PiggyBank className="h-12 w-12 mb-3" />
                  <p className="text-3xl font-black">RM50,000+</p>
                  <p className="text-green-100">Purata Jimat 25 Tahun</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
                  <Percent className="h-12 w-12 mb-3" />
                  <p className="text-3xl font-black">85%</p>
                  <p className="text-blue-100">Kurang Bil Elektrik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-6xl font-black">
              <Fire className="inline h-12 w-12 mr-4 text-yellow-400" />
              TAWARAN TERBATAS!
            </h2>
            <p className="text-2xl font-bold">Hanya 50 keluarga pertama yang layak untuk rebat RM15,000!</p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-5xl font-black text-yellow-400">27</p>
                  <p className="text-xl">Keluarga Tersisa</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-yellow-400">15</p>
                  <p className="text-xl">Hari Lagi</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-yellow-400">RM15K</p>
                  <p className="text-xl">Rebat Kerajaan</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-300 text-red-700 font-black text-2xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
              <Zap className="h-8 w-8 mr-4" />
              CLAIM REBAT SEKARANG!
              <ArrowRight className="h-8 w-8 ml-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              Apa Kata <span className="text-green-600">Pelanggan Setia</span> Kami?
            </h2>
            <p className="text-2xl text-gray-600 font-semibold">100+ keluarga telah menjimatkan lebih RM2 JUTA!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="relative overflow-hidden border-none shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 bg-white">
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-2xl">
                  <p className="font-bold">VERIFIED ✓</p>
                </div>
                
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-green-400"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                    "{testimonial.comment}"
                  </p>
                  
                  {/* Savings Highlight */}
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-xl">
                    <p className="text-center font-bold text-gray-900 mb-2">Penjimatan Bulanan:</p>
                    <div className="flex items-center justify-center space-x-3">
                      <span className="bg-red-200 text-red-800 px-3 py-2 rounded-full font-bold text-lg line-through">
                        {testimonial.beforeBill}
                      </span>
                      <ArrowRight className="h-5 w-5 text-gray-500" />
                      <span className="bg-green-200 text-green-800 px-3 py-2 rounded-full font-bold text-lg">
                        {testimonial.afterBill}
                      </span>
                    </div>
                    <p className="text-center text-green-700 font-bold mt-2">
                      Jimat: RM{parseInt(testimonial.beforeBill.replace('RM', '')) - parseInt(testimonial.afterBill.replace('RM', ''))}/bulan
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="text-center mt-12">
            <div className="flex justify-center items-center space-x-8 flex-wrap">
              <Badge className="bg-green-100 text-green-800 px-6 py-3 text-lg font-bold">
                <ThumbsUp className="h-5 w-5 mr-2" />
                98% Customer Satisfaction
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 px-6 py-3 text-lg font-bold">
                <Award className="h-5 w-5 mr-2" />
                Best Solar Company 2024
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-6 py-3 text-lg font-bold">
                <Heart className="h-5 w-5 mr-2" />
                1000+ Happy Families
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Benefit Focused */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              Kenapa Pilih <span className="text-blue-600">Ai Brique?</span>
            </h2>
            <p className="text-2xl text-gray-600 font-semibold">Kami bukan sekadar pasang panel - kami jaga masa depan keluarga anda!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coins className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">JIMAT MAKSIMUM</h3>
              <p className="text-gray-700">Kurangkan bil elektrik hingga 90%. Bayar sekali, jimat selamanya!</p>
              <div className="mt-4 bg-green-200 text-green-800 px-4 py-2 rounded-full font-bold">
                RM50,000+ Jimat
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Timer className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">PEMASANGAN PANTAS</h3>
              <p className="text-gray-700">Dalam 14 hari, anda dah boleh start jimat. Tiada tunggu berbulan-bulan!</p>
              <div className="mt-4 bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-bold">
                Express Install
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">JAMINAN TERBAIK</h3>
              <p className="text-gray-700">25 tahun jaminan + Money back guarantee. Risiko ZERO untuk anda!</p>
              <div className="mt-4 bg-purple-200 text-purple-800 px-4 py-2 rounded-full font-bold">
                100% Protected
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">BAYAR MUDAH</h3>
              <p className="text-gray-700">Ansuran bulanan dari RM200. Lebih murah dari bil elektrik anda sekarang!</p>
              <div className="mt-4 bg-orange-200 text-orange-800 px-4 py-2 rounded-full font-bold">
                Financing Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Pricing - Value Focused */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              Pilih Pakej <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Terbaik</span>
            </h2>
            <p className="text-2xl text-gray-300 font-semibold">Semua pakej include: Pemasangan, Jaminan 25 Tahun & Maintenance!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className={`relative overflow-hidden transition-all duration-500 hover:-translate-y-6 group ${
                  pkg.popular 
                    ? 'glass-card-premium ring-4 ring-yellow-400/50 shadow-3xl scale-110' 
                    : 'glass-card-dark hover:shadow-3xl'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-green-400 text-black text-center py-3 font-black text-lg">
                    🏆 PILIHAN TERBAIK - JIMAT RM8,000! 🏆
                  </div>
                )}
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-green-400/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                
                <CardHeader className="text-center pb-8 relative z-10" style={{ paddingTop: pkg.popular ? '5rem' : '2rem' }}>
                  <CardTitle className="text-3xl font-black text-white mb-4">{pkg.name}</CardTitle>
                  
                  {/* Value Proposition */}
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4 mb-4">
                    <p className="text-white font-bold">JIMAT HINGGA:</p>
                    <p className="text-4xl font-black text-green-400">
                      RM{(parseInt(pkg.power.replace(' kW', '')) * 1200).toLocaleString()}/tahun
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg text-gray-300 line-through">Harga Biasa: RM{(parseInt(pkg.price.replace('RM', '').replace(',', '')) * 1.2).toLocaleString()}</p>
                    <div className="text-5xl font-black text-white">
                      {pkg.price}
                    </div>
                    <p className="text-xl text-yellow-400 font-semibold">{pkg.power}</p>
                    <p className="text-sm text-gray-400">*Termasuk semua kos pemasangan</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-400/30">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span className="text-white font-semibold">Jaminan {pkg.warranty}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-500/10 rounded-lg border border-blue-400/30">
                      <Home className="h-6 w-6 text-blue-400 flex-shrink-0" />
                      <span className="text-white font-semibold">{pkg.suitableFor}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-400/30">
                      <Timer className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                      <span className="text-white font-semibold">Pemasangan 14 Hari</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-500/10 rounded-lg border border-purple-400/30">
                      <CreditCard className="h-6 w-6 text-purple-400 flex-shrink-0" />
                      <span className="text-white font-semibold">Ansuran dari RM{Math.round(parseInt(pkg.price.replace('RM', '').replace(',', '')) / 60)}/bulan</span>
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 text-lg ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:from-green-400 hover:to-yellow-400 animate-pulse'
                        : 'bg-gradient-to-r from-white to-gray-100 text-gray-900 hover:from-gray-100 hover:to-white'
                    }`}
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    {pkg.popular ? 'PILIH SEKARANG - JIMAT RM8K!' : 'Pilih Pakej Ini'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-yellow-400/20 to-green-400/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">💰 BONUS UNTUK 20 PELANGGAN PERTAMA!</h3>
              <ul className="text-white text-lg space-y-2">
                <li>✅ FREE Smart Monitoring System (Nilai: RM2,000)</li>
                <li>✅ FREE 5 Tahun Extended Warranty (Nilai: RM3,000)</li>
                <li>✅ FREE Energy Efficiency Audit (Nilai: RM500)</li>
              </ul>
              <Button 
                size="lg" 
                className="mt-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-black text-xl px-12 py-4 rounded-2xl animate-pulse"
              >
                <Gift className="h-6 w-6 mr-3" />
                CLAIM BONUS SEKARANG!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Customer Concerns */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              Soalan Yang <span className="text-blue-600">Selalu Ditanya</span>
            </h2>
            <p className="text-2xl text-gray-600 font-semibold">Kami faham kerisauan anda. Mari kami jawab!</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`} className="bg-white border-none rounded-2xl shadow-lg overflow-hidden">
                  <AccordionTrigger className="px-8 py-6 text-left text-xl font-bold text-gray-900 hover:text-green-600 transition-colors duration-300 no-underline">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {faq.id}
                      </div>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-700 leading-relaxed text-lg">
                    <div className="pl-14 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA - Urgency */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              Jangan <span className="text-yellow-400">Terlepas Peluang</span> Ini!
            </h2>
            <p className="text-2xl text-white font-semibold">Dapatkan sebut harga PERCUMA dan mulakan penjimatan anda hari ini!</p>

            <Card className="bg-white/10 backdrop-blur-md border-none shadow-3xl max-w-3xl mx-auto">
              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-lg font-bold text-white">Nama Penuh *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="border-2 border-white/30 bg-white/20 text-white placeholder-white/70 focus:border-yellow-400 rounded-xl p-4 text-lg"
                        placeholder="Masukkan nama penuh anda"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-lg font-bold text-white">Nombor Telefon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                        className="border-2 border-white/30 bg-white/20 text-white placeholder-white/70 focus:border-yellow-400 rounded-xl p-4 text-lg"
                        placeholder="+60 123 456 789"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="address" className="text-lg font-bold text-white">Alamat/Poskod *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleFormChange}
                      required
                      className="border-2 border-white/30 bg-white/20 text-white placeholder-white/70 focus:border-yellow-400 rounded-xl p-4 text-lg"
                      placeholder="Alamat lengkap untuk lawatan percuma"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-yellow-400 text-black font-black text-2xl py-6 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 animate-pulse"
                  >
                    <Zap className="h-8 w-8 mr-4" />
                    DAPATKAN SEBUT HARGA PERCUMA + REBAT RM15K!
                    <Gift className="h-8 w-8 ml-4" />
                  </Button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-white/80 text-sm">
                    ✅ Tiada komitmen • ✅ Lawatan percuma • ✅ Sebut harga dalam 24 jam
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Sun className="h-12 w-12 text-yellow-400" />
                <div>
                  <h3 className="text-2xl font-black">Ai Brique</h3>
                  <p className="text-gray-400">Solar Terpercaya #1</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Telah membantu 1000+ keluarga Malaysia menjimatkan lebih RM5 juta dalam bil elektrik. 
                Kami komited untuk masa depan tenaga bersih Malaysia.
              </p>
              
              <div className="flex space-x-4">
                <div className="bg-green-600 p-3 rounded-lg text-center">
                  <p className="text-2xl font-black">1000+</p>
                  <p className="text-xs">Happy Families</p>
                </div>
                <div className="bg-blue-600 p-3 rounded-lg text-center">
                  <p className="text-2xl font-black">25</p>
                  <p className="text-xs">Years Warranty</p>
                </div>
                <div className="bg-yellow-600 p-3 rounded-lg text-center">
                  <p className="text-2xl font-black">5.0</p>
                  <p className="text-xs">Star Rating</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Kenapa Pilih Kami?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  100% Money Back Guarantee
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Pemasangan Express 14 Hari
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Jaminan 25 Tahun
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Maintenance Percuma
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-green-400">Kawasan Liputan</h4>
              <ul className="space-y-3 text-gray-300">
                <li>• Kuala Lumpur & Selangor</li>
                <li>• Johor & Melaka</li>
                <li>• Penang & Kedah</li>
                <li>• Perak & Negeri Sembilan</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-red-400">Hubungi Sekarang!</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <div>
                    <p className="font-bold text-white">+60 3-1234 5678</p>
                    <p className="text-sm">24/7 Hotline Percuma</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <span>info@aibrique.my</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 font-bold animate-pulse">
                  <Phone className="h-4 w-4 mr-2" />
                  CALL SEKARANG!
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Ai Brique. Hak cipta terpelihara. | Lesen SEDA: ABC123456</p>
            <div className="mt-4 flex justify-center space-x-6">
              <Badge className="bg-green-600 text-white">✅ SEDA Approved</Badge>
              <Badge className="bg-blue-600 text-white">🏆 ISO Certified</Badge>
              <Badge className="bg-purple-600 text-white">⭐ 5-Star Rated</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;