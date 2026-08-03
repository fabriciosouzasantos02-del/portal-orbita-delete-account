// Portal Orbita - Delete Account Page
// Internationalization system: detects browser/device language automatically

export type SupportedLocale =
  | "pt"
  | "en"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "ja"
  | "ko"
  | "zh"
  | "ar"
  | "ru"
  | "hi";

export interface Translations {
  // Page meta
  pageTitle: string;
  pageDescription: string;

  // Header
  appName: string;
  developerName: string;

  // Hero section
  heroTitle: string;
  heroSubtitle: string;

  // Steps section
  stepsTitle: string;
  stepsSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;

  // Data section
  dataTitle: string;
  dataSubtitle: string;
  deletedDataTitle: string;
  deletedDataItems: string[];
  retainedDataTitle: string;
  retainedDataItems: string[];
  retentionPeriodTitle: string;
  retentionPeriodDesc: string;

  // Form section
  formTitle: string;
  formSubtitle: string;
  formName: string;
  formNamePlaceholder: string;
  formEmail: string;
  formEmailPlaceholder: string;
  formReason: string;
  formReasonPlaceholder: string;
  formReasonOptions: { value: string; label: string }[];
  formConfirm: string;
  formSubmit: string;
  formSubmitting: string;
  formSuccess: string;
  formSuccessDesc: string;
  formError: string;
  formErrorDesc: string;
  formRequired: string;
  formEmailInvalid: string;
  formConfirmRequired: string;

  // Warning section
  warningTitle: string;
  warningDesc: string;
  warningItems: string[];

  // Footer
  footerRights: string;
  footerPrivacy: string;
  footerTerms: string;
  footerContact: string;
  footerSupport: string;
}

const translations: Record<SupportedLocale, Translations> = {
  pt: {
    pageTitle: "Portal Orbita — Excluir Conta",
    pageDescription:
      "Solicite a exclusão da sua conta e dados do Portal Orbita.",
    appName: "Portal Orbita",
    developerName: "Portal Orbita S.A.",
    heroTitle: "Excluir Minha Conta",
    heroSubtitle:
      "Você pode solicitar a exclusão permanente da sua conta e de todos os dados associados a qualquer momento.",
    stepsTitle: "Como Solicitar a Exclusão",
    stepsSubtitle:
      "Siga as etapas abaixo para solicitar a exclusão da sua conta no Portal Orbita.",
    step1Title: "Preencha o Formulário",
    step1Desc:
      "Informe seu nome completo, o e-mail cadastrado na conta e o motivo da exclusão.",
    step2Title: "Confirmação por E-mail",
    step2Desc:
      "Você receberá um e-mail de confirmação em até 24 horas com as instruções finais.",
    step3Title: "Processamento",
    step3Desc:
      "Nossa equipe processará sua solicitação em até 30 dias úteis após a confirmação.",
    step4Title: "Exclusão Concluída",
    step4Desc:
      "Você receberá uma notificação quando a exclusão estiver concluída.",
    dataTitle: "O Que Acontece com Seus Dados",
    dataSubtitle:
      "Transparência total sobre quais dados são excluídos e quais podem ser mantidos.",
    deletedDataTitle: "Dados Excluídos Permanentemente",
    deletedDataItems: [
      "Perfil e informações pessoais (nome, data de nascimento, cidade natal)",
      "Mapa astral e configurações personalizadas",
      "Histórico de consultas e leituras de tarô",
      "Preferências e configurações do aplicativo",
      "Dados de uso e atividade dentro do app",
      "Assinaturas e histórico de pagamentos (dados de pagamento gerenciados pelo Stripe)",
    ],
    retainedDataTitle: "Dados Mantidos Temporariamente",
    retainedDataItems: [
      "Registros financeiros e de faturamento (exigência legal — 5 anos)",
      "Logs de segurança e prevenção de fraudes (90 dias)",
      "Dados anonimizados para fins estatísticos (sem identificação pessoal)",
    ],
    retentionPeriodTitle: "Período de Retenção",
    retentionPeriodDesc:
      "Após a confirmação da solicitação, seus dados pessoais serão excluídos em até 30 dias. Dados financeiros são mantidos por até 5 anos conforme exigência legal. Dados anonimizados podem ser mantidos indefinidamente para fins estatísticos.",
    formTitle: "Solicitar Exclusão de Conta",
    formSubtitle:
      "Preencha o formulário abaixo. Nossa equipe entrará em contato em até 24 horas.",
    formName: "Nome Completo",
    formNamePlaceholder: "Seu nome completo",
    formEmail: "E-mail da Conta",
    formEmailPlaceholder: "e-mail cadastrado no Portal Orbita",
    formReason: "Motivo da Exclusão",
    formReasonPlaceholder: "Selecione um motivo",
    formReasonOptions: [
      { value: "privacy", label: "Privacidade e proteção de dados" },
      { value: "no_longer_use", label: "Não uso mais o aplicativo" },
      { value: "switching", label: "Estou migrando para outro serviço" },
      { value: "dissatisfied", label: "Insatisfação com o serviço" },
      { value: "technical", label: "Problemas técnicos" },
      { value: "other", label: "Outro motivo" },
    ],
    formConfirm:
      "Entendo que esta ação é irreversível e que todos os meus dados serão excluídos permanentemente.",
    formSubmit: "Enviar Solicitação de Exclusão",
    formSubmitting: "Enviando...",
    formSuccess: "Solicitação Enviada com Sucesso!",
    formSuccessDesc:
      "Recebemos sua solicitação de exclusão de conta. Você receberá um e-mail de confirmação em breve no endereço informado. Nossa equipe processará sua solicitação em até 30 dias úteis.",
    formError: "Erro ao Enviar",
    formErrorDesc:
      "Não foi possível enviar sua solicitação. Por favor, tente novamente ou entre em contato diretamente pelo e-mail unterstutzung.service@gmail.com",
    formRequired: "Este campo é obrigatório",
    formEmailInvalid: "Por favor, insira um e-mail válido",
    formConfirmRequired: "Você precisa confirmar para prosseguir",
    warningTitle: "Atenção: Ação Irreversível",
    warningDesc:
      "A exclusão da conta é permanente e não pode ser desfeita. Antes de prosseguir, considere:",
    warningItems: [
      "Todos os seus dados astrológicos e mapas serão perdidos permanentemente",
      "Assinaturas ativas devem ser canceladas separadamente pelo Stripe",
      "Não será possível recuperar o histórico de consultas e leituras",
      "Uma nova conta com o mesmo e-mail poderá ser criada, mas sem os dados anteriores",
    ],
    footerRights: "Todos os direitos reservados.",
    footerPrivacy: "Política de Privacidade",
    footerTerms: "Termos de Uso",
    footerContact: "Contato",
    footerSupport: "Suporte",
  },
  en: {
    pageTitle: "Portal Orbita — Delete Account",
    pageDescription: "Request deletion of your Portal Orbita account and data.",
    appName: "Portal Orbita",
    developerName: "Portal Orbita S.A.",
    heroTitle: "Delete My Account",
    heroSubtitle:
      "You can request permanent deletion of your account and all associated data at any time.",
    stepsTitle: "How to Request Deletion",
    stepsSubtitle:
      "Follow the steps below to request deletion of your Portal Orbita account.",
    step1Title: "Fill Out the Form",
    step1Desc:
      "Provide your full name, the email registered on your account, and the reason for deletion.",
    step2Title: "Email Confirmation",
    step2Desc:
      "You will receive a confirmation email within 24 hours with final instructions.",
    step3Title: "Processing",
    step3Desc:
      "Our team will process your request within 30 business days after confirmation.",
    step4Title: "Deletion Complete",
    step4Desc:
      "You will receive a notification when the deletion is complete.",
    dataTitle: "What Happens to Your Data",
    dataSubtitle:
      "Full transparency about which data is deleted and which may be retained.",
    deletedDataTitle: "Permanently Deleted Data",
    deletedDataItems: [
      "Profile and personal information (name, date of birth, hometown)",
      "Birth chart and personalized settings",
      "Query history and tarot readings",
      "App preferences and settings",
      "Usage data and activity within the app",
      "Subscriptions and payment history (payment data managed by Stripe)",
    ],
    retainedDataTitle: "Temporarily Retained Data",
    retainedDataItems: [
      "Financial and billing records (legal requirement — 5 years)",
      "Security and fraud prevention logs (90 days)",
      "Anonymized data for statistical purposes (no personal identification)",
    ],
    retentionPeriodTitle: "Retention Period",
    retentionPeriodDesc:
      "After the request is confirmed, your personal data will be deleted within 30 days. Financial data is retained for up to 5 years as required by law. Anonymized data may be retained indefinitely for statistical purposes.",
    formTitle: "Request Account Deletion",
    formSubtitle:
      "Fill out the form below. Our team will contact you within 24 hours.",
    formName: "Full Name",
    formNamePlaceholder: "Your full name",
    formEmail: "Account Email",
    formEmailPlaceholder: "email registered on Portal Orbita",
    formReason: "Reason for Deletion",
    formReasonPlaceholder: "Select a reason",
    formReasonOptions: [
      { value: "privacy", label: "Privacy and data protection" },
      { value: "no_longer_use", label: "I no longer use the app" },
      { value: "switching", label: "Switching to another service" },
      { value: "dissatisfied", label: "Dissatisfied with the service" },
      { value: "technical", label: "Technical issues" },
      { value: "other", label: "Other reason" },
    ],
    formConfirm:
      "I understand this action is irreversible and all my data will be permanently deleted.",
    formSubmit: "Submit Deletion Request",
    formSubmitting: "Submitting...",
    formSuccess: "Request Submitted Successfully!",
    formSuccessDesc:
      "We have received your account deletion request. You will receive a confirmation email shortly at the address provided. Our team will process your request within 30 business days.",
    formError: "Submission Error",
    formErrorDesc:
      "Unable to submit your request. Please try again or contact us directly at unterstutzung.service@gmail.com",
    formRequired: "This field is required",
    formEmailInvalid: "Please enter a valid email address",
    formConfirmRequired: "You must confirm to proceed",
    warningTitle: "Warning: Irreversible Action",
    warningDesc:
      "Account deletion is permanent and cannot be undone. Before proceeding, consider:",
    warningItems: [
      "All your astrological data and charts will be permanently lost",
      "Active subscriptions must be cancelled separately through Stripe",
      "It will not be possible to recover your query and reading history",
      "A new account with the same email can be created, but without previous data",
    ],
    footerRights: "All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerContact: "Contact",
    footerSupport: "Support",
  },
  es: {
    pageTitle: "Portal Orbita — Eliminar Cuenta",
    pageDescription:
      "Solicita la eliminación de tu cuenta y datos de Portal Orbita.",
    appName: "Portal Orbita",
    developerName: "Portal Orbita S.A.",
    heroTitle: "Eliminar Mi Cuenta",
    heroSubtitle:
      "Puedes solicitar la eliminación permanente de tu cuenta y todos los datos asociados en cualquier momento.",
    stepsTitle: "Cómo Solicitar la Eliminación",
    stepsSubtitle:
      "Sigue los pasos a continuación para solicitar la eliminación de tu cuenta de Portal Orbita.",
    step1Title: "Completa el Formulario",
    step1Desc:
      "Proporciona tu nombre completo, el correo electrónico registrado en tu cuenta y el motivo de la eliminación.",
    step2Title: "Confirmación por Correo",
    step2Desc:
      "Recibirás un correo de confirmación en un plazo de 24 horas con las instrucciones finales.",
    step3Title: "Procesamiento",
    step3Desc:
      "Nuestro equipo procesará tu solicitud en un plazo de 30 días hábiles tras la confirmación.",
    step4Title: "Eliminación Completada",
    step4Desc:
      "Recibirás una notificación cuando la eliminación esté completa.",
    dataTitle: "Qué Sucede con Tus Datos",
    dataSubtitle:
      "Transparencia total sobre qué datos se eliminan y cuáles pueden conservarse.",
    deletedDataTitle: "Datos Eliminados Permanentemente",
    deletedDataItems: [
      "Perfil e información personal (nombre, fecha de nacimiento, ciudad natal)",
      "Carta natal y configuraciones personalizadas",
      "Historial de consultas y lecturas de tarot",
      "Preferencias y configuraciones de la aplicación",
      "Datos de uso y actividad dentro de la app",
      "Suscripciones e historial de pagos (datos de pago gestionados por Stripe)",
    ],
    retainedDataTitle: "Datos Conservados Temporalmente",
    retainedDataItems: [
      "Registros financieros y de facturación (requisito legal — 5 años)",
      "Registros de seguridad y prevención de fraudes (90 días)",
      "Datos anonimizados con fines estadísticos (sin identificación personal)",
    ],
    retentionPeriodTitle: "Período de Retención",
    retentionPeriodDesc:
      "Tras la confirmación de la solicitud, tus datos personales serán eliminados en un plazo de 30 días. Los datos financieros se conservan hasta 5 años según lo exige la ley. Los datos anonimizados pueden conservarse indefinidamente con fines estadísticos.",
    formTitle: "Solicitar Eliminación de Cuenta",
    formSubtitle:
      "Completa el formulario a continuación. Nuestro equipo se pondrá en contacto en un plazo de 24 horas.",
    formName: "Nombre Completo",
    formNamePlaceholder: "Tu nombre completo",
    formEmail: "Correo de la Cuenta",
    formEmailPlaceholder: "correo registrado en Portal Orbita",
    formReason: "Motivo de la Eliminación",
    formReasonPlaceholder: "Selecciona un motivo",
    formReasonOptions: [
      { value: "privacy", label: "Privacidad y protección de datos" },
      { value: "no_longer_use", label: "Ya no uso la aplicación" },
      { value: "switching", label: "Cambio a otro servicio" },
      { value: "dissatisfied", label: "Insatisfacción con el servicio" },
      { value: "technical", label: "Problemas técnicos" },
      { value: "other", label: "Otro motivo" },
    ],
    formConfirm:
      "Entiendo que esta acción es irreversible y que todos mis datos serán eliminados permanentemente.",
    formSubmit: "Enviar Solicitud de Eliminación",
    formSubmitting: "Enviando...",
    formSuccess: "¡Solicitud Enviada con Éxito!",
    formSuccessDesc:
      "Hemos recibido tu solicitud de eliminación de cuenta. Recibirás un correo de confirmación en breve en la dirección proporcionada. Nuestro equipo procesará tu solicitud en un plazo de 30 días hábiles.",
    formError: "Error al Enviar",
    formErrorDesc:
      "No se pudo enviar tu solicitud. Por favor, inténtalo de nuevo o contáctanos directamente en unterstutzung.service@gmail.com",
    formRequired: "Este campo es obligatorio",
    formEmailInvalid: "Por favor, introduce un correo electrónico válido",
    formConfirmRequired: "Debes confirmar para continuar",
    warningTitle: "Advertencia: Acción Irreversible",
    warningDesc:
      "La eliminación de la cuenta es permanente y no se puede deshacer. Antes de continuar, considera:",
    warningItems: [
      "Todos tus datos astrológicos y cartas se perderán permanentemente",
      "Las suscripciones activas deben cancelarse por separado a través de Stripe",
      "No será posible recuperar el historial de consultas y lecturas",
      "Se puede crear una nueva cuenta con el mismo correo, pero sin los datos anteriores",
    ],
    footerRights: "Todos los derechos reservados.",
    footerPrivacy: "Política de Privacidad",
    footerTerms: "Términos de Servicio",
    footerContact: "Contacto",
    footerSupport: "Soporte",
  },
  fr: {
    pageTitle: "Portal Orbita — Supprimer le Compte",
    pageDescription:
      "Demandez la suppression de votre compte et de vos données Portal Orbita.",
    appName: "Portal Orbita",
    developerName: "Portal Orbita S.A.",
    heroTitle: "Supprimer Mon Compte",
    heroSubtitle:
      "Vous pouvez demander la suppression permanente de votre compte et de toutes les données associées à tout moment.",
    stepsTitle: "Comment Demander la Suppression",
    stepsSubtitle:
      "Suivez les étapes ci-dessous pour demander la suppression de votre compte Portal Orbita.",
    step1Title: "Remplissez le Formulaire",
    step1Desc:
      "Indiquez votre nom complet, l'e-mail enregistré sur votre compte et la raison de la suppression.",
    step2Title: "Confirmation par E-mail",
    step2Desc:
      "Vous recevrez un e-mail de confirmation dans les 24 heures avec les instructions finales.",
    step3Title: "Traitement",
    step3Desc:
      "Notre équipe traitera votre demande dans les 30 jours ouvrables suivant la confirmation.",
    step4Title: "Suppression Terminée",
    step4Desc:
      "Vous recevrez une notification lorsque la suppression sera terminée.",
    dataTitle: "Que Se Passe-t-il avec Vos Données",
    dataSubtitle:
      "Transparence totale sur les données supprimées et celles pouvant être conservées.",
    deletedDataTitle: "Données Supprimées Définitivement",
    deletedDataItems: [
      "Profil et informations personnelles (nom, date de naissance, ville natale)",
      "Thème natal et paramètres personnalisés",
      "Historique des consultations et lectures de tarot",
      "Préférences et paramètres de l'application",
      "Données d'utilisation et activité dans l'app",
      "Abonnements et historique des paiements (données de paiement gérées par Stripe)",
    ],
    retainedDataTitle: "Données Conservées Temporairement",
    retainedDataItems: [
      "Dossiers financiers et de facturation (obligation légale — 5 ans)",
      "Journaux de sécurité et de prévention de la fraude (90 jours)",
      "Données anonymisées à des fins statistiques (sans identification personnelle)",
    ],
    retentionPeriodTitle: "Période de Conservation",
    retentionPeriodDesc:
      "Après confirmation de la demande, vos données personnelles seront supprimées dans les 30 jours. Les données financières sont conservées jusqu'à 5 ans conformément aux exigences légales. Les données anonymisées peuvent être conservées indéfiniment à des fins statistiques.",
    formTitle: "Demander la Suppression du Compte",
    formSubtitle:
      "Remplissez le formulaire ci-dessous. Notre équipe vous contactera dans les 24 heures.",
    formName: "Nom Complet",
    formNamePlaceholder: "Votre nom complet",
    formEmail: "E-mail du Compte",
    formEmailPlaceholder: "e-mail enregistré sur Portal Orbita",
    formReason: "Raison de la Suppression",
    formReasonPlaceholder: "Sélectionnez une raison",
    formReasonOptions: [
      { value: "privacy", label: "Confidentialité et protection des données" },
      { value: "no_longer_use", label: "Je n'utilise plus l'application" },
      { value: "switching", label: "Passage à un autre service" },
      { value: "dissatisfied", label: "Insatisfaction du service" },
      { value: "technical", label: "Problèmes techniques" },
      { value: "other", label: "Autre raison" },
    ],
    formConfirm:
      "Je comprends que cette action est irréversible et que toutes mes données seront définitivement supprimées.",
    formSubmit: "Envoyer la Demande de Suppression",
    formSubmitting: "Envoi en cours...",
    formSuccess: "Demande Envoyée avec Succès !",
    formSuccessDesc:
      "Nous avons reçu votre demande de suppression de compte. Vous recevrez un e-mail de confirmation sous peu à l'adresse fournie. Notre équipe traitera votre demande dans les 30 jours ouvrables.",
    formError: "Erreur d'Envoi",
    formErrorDesc:
      "Impossible d'envoyer votre demande. Veuillez réessayer ou nous contacter directement à unterstutzung.service@gmail.com",
    formRequired: "Ce champ est obligatoire",
    formEmailInvalid: "Veuillez entrer une adresse e-mail valide",
    formConfirmRequired: "Vous devez confirmer pour continuer",
    warningTitle: "Attention : Action Irréversible",
    warningDesc:
      "La suppression du compte est permanente et ne peut pas être annulée. Avant de continuer, considérez :",
    warningItems: [
      "Toutes vos données astrologiques et thèmes seront définitivement perdus",
      "Les abonnements actifs doivent être annulés séparément via Stripe",
      "Il ne sera pas possible de récupérer l'historique des consultations et lectures",
      "Un nouveau compte avec le même e-mail peut être créé, mais sans les données précédentes",
    ],
    footerRights: "Tous droits réservés.",
    footerPrivacy: "Politique de Confidentialité",
    footerTerms: "Conditions d'Utilisation",
    footerContact: "Contact",
    footerSupport: "Support",
  },
  de: {
    pageTitle: "Portal Orbita — Konto löschen",
    pageDescription:
      "Beantragen Sie die Löschung Ihres Portal Orbita-Kontos und Ihrer Daten.",
    appName: "Portal Orbita",
    developerName: "Portal Orbita S.A.",
    heroTitle: "Mein Konto Löschen",
    heroSubtitle:
      "Sie können jederzeit die dauerhafte Löschung Ihres Kontos und aller zugehörigen Daten beantragen.",
    stepsTitle: "So Beantragen Sie die Löschung",
    stepsSubtitle:
      "Folgen Sie den nachstehenden Schritten, um die Löschung Ihres Portal Orbita-Kontos zu beantragen.",
    step1Title: "Formular Ausfüllen",
    step1Desc:
      "Geben Sie Ihren vollständigen Namen, die bei Ihrem Konto registrierte E-Mail und den Grund für die Löschung an.",
    step2Title: "E-Mail-Bestätigung",
    step2Desc:
      "Sie erhalten innerhalb von 24 Stunden eine Bestätigungs-E-Mail mit den abschließenden Anweisungen.",
    step3Title: "Bearbeitung",
    step3Desc:
      "Unser Team bearbeitet Ihren Antrag innerhalb von 30 Werktagen nach der Bestätigung.",
    step4Title: "Löschung Abgeschlossen",
    step4Desc:
      "Sie erhalten eine Benachrichtigung, wenn die Löschung abgeschlossen ist.",
    dataTitle: "Was mit Ihren Daten Passiert",
    dataSubtitle:
      "Vollständige Transparenz darüber, welche Daten gelöscht und welche möglicherweise aufbewahrt werden.",
    deletedDataTitle: "Dauerhaft Gelöschte Daten",
    deletedDataItems: [
      "Profil und persönliche Informationen (Name, Geburtsdatum, Geburtsstadt)",
      "Geburtshoroskop und personalisierte Einstellungen",
      "Anfrageverlauf und Tarot-Lesungen",
      "App-Präferenzen und Einstellungen",
      "Nutzungsdaten und Aktivitäten in der App",
      "Abonnements und Zahlungshistorie (Zahlungsdaten von Stripe verwaltet)",
    ],
    retainedDataTitle: "Vorübergehend Aufbewahrte Daten",
    retainedDataItems: [
      "Finanz- und Abrechnungsunterlagen (gesetzliche Anforderung — 5 Jahre)",
      "Sicherheits- und Betrugspräventionsprotokolle (90 Tage)",
      "Anonymisierte Daten für statistische Zwecke (keine persönliche Identifikation)",
    ],
    retentionPeriodTitle: "Aufbewahrungsfrist",
    retentionPeriodDesc:
      "Nach Bestätigung des Antrags werden Ihre persönlichen Daten innerhalb von 30 Tagen gelöscht. Finanzdaten werden gemäß gesetzlicher Anforderungen bis zu 5 Jahre aufbewahrt. Anonymisierte Daten können für statistische Zwecke unbegrenzt aufbewahrt werden.",
    formTitle: "Kontolöschung Beantragen",
    formSubtitle:
      "Füllen Sie das untenstehende Formular aus. Unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.",
    formName: "Vollständiger Name",
    formNamePlaceholder: "Ihr vollständiger Name",
    formEmail: "Konto-E-Mail",
    formEmailPlaceholder: "bei Portal Orbita registrierte E-Mail",
    formReason: "Grund für die Löschung",
    formReasonPlaceholder: "Wählen Sie einen Grund",
    formReasonOptions: [
      { value: "privacy", label: "Datenschutz und Datensicherheit" },
      { value: "no_longer_use", label: "Ich nutze die App nicht mehr" },
      { value: "switching", label: "Wechsel zu einem anderen Dienst" },
      { value: "dissatisfied", label: "Unzufriedenheit mit dem Dienst" },
      { value: "technical", label: "Technische Probleme" },
      { value: "other", label: "Anderer Grund" },
    ],
    formConfirm:
      "Ich verstehe, dass diese Aktion unwiderruflich ist und alle meine Daten dauerhaft gelöscht werden.",
    formSubmit: "Löschungsantrag Senden",
    formSubmitting: "Wird gesendet...",
    formSuccess: "Antrag Erfolgreich Gesendet!",
    formSuccessDesc:
      "Wir haben Ihren Antrag auf Kontolöschung erhalten. Sie erhalten in Kürze eine Bestätigungs-E-Mail an die angegebene Adresse. Unser Team wird Ihren Antrag innerhalb von 30 Werktagen bearbeiten.",
    formError: "Sendefehler",
    formErrorDesc:
      "Ihr Antrag konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter unterstutzung.service@gmail.com",
    formRequired: "Dieses Feld ist erforderlich",
    formEmailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
    formConfirmRequired: "Sie müssen bestätigen, um fortzufahren",
    warningTitle: "Warnung: Unwiderrufliche Aktion",
    warningDesc:
      "Die Kontolöschung ist dauerhaft und kann nicht rückgängig gemacht werden. Bevor Sie fortfahren, bedenken Sie:",
    warningItems: [
      "Alle Ihre astrologischen Daten und Horoskope gehen dauerhaft verloren",
      "Aktive Abonnements müssen separat über Stripe gekündigt werden",
      "Es wird nicht möglich sein, den Anfrage- und Leseverlauf wiederherzustellen",
      "Ein neues Konto mit derselben E-Mail kann erstellt werden, jedoch ohne die vorherigen Daten",
    ],
    footerRights: "Alle Rechte vorbehalten.",
    footerPrivacy: "Datenschutzrichtlinie",
    footerTerms: "Nutzungsbedingungen",
    footerContact: "Kontakt",
    footerSupport: "Support",
  },
  it: {
    pageTitle: "Portal Orbita — Elimina Account",
    pageDescription:
      "Richiedi l'eliminazione del tuo account e dei dati di Portal Orbita.",
    appName: "Portal Orbita",
    developerName: "Portal Orbita S.A.",
    heroTitle: "Elimina Il Mio Account",
    heroSubtitle:
      "Puoi richiedere l'eliminazione permanente del tuo account e di tutti i dati associati in qualsiasi momento.",
    stepsTitle: "Come Richiedere l'Eliminazione",
    stepsSubtitle:
      "Segui i passaggi seguenti per richiedere l'eliminazione del tuo account Portal Orbita.",
    step1Title: "Compila il Modulo",
    step1Desc:
      "Fornisci il tuo nome completo, l'e-mail registrata sul tuo account e il motivo dell'eliminazione.",
    step2Title: "Conferma via E-mail",
    step2Desc:
      "Riceverai un'e-mail di conferma entro 24 ore con le istruzioni finali.",
    step3Title: "Elaborazione",
    step3Desc:
      "Il nostro team elaborerà la tua richiesta entro 30 giorni lavorativi dalla conferma.",
    step4Title: "Eliminazione Completata",
    step4Desc:
      "Riceverai una notifica quando l'eliminazione sarà completata.",
    dataTitle: "Cosa Succede ai Tuoi Dati",
    dataSubtitle:
      "Piena trasparenza su quali dati vengono eliminati e quali possono essere conservati.",
    deletedDataTitle: "Dati Eliminati Definitivamente",
    deletedDataItems: [
      "Profilo e informazioni personali (nome, data di nascita, città natale)",
      "Tema natale e impostazioni personalizzate",
      "Cronologia delle consultazioni e letture dei tarocchi",
      "Preferenze e impostazioni dell'app",
      "Dati di utilizzo e attività nell'app",
      "Abbonamenti e cronologia dei pagamenti (dati di pagamento gestiti da Stripe)",
    ],
    retainedDataTitle: "Dati Conservati Temporaneamente",
    retainedDataItems: [
      "Registri finanziari e di fatturazione (requisito legale — 5 anni)",
      "Log di sicurezza e prevenzione delle frodi (90 giorni)",
      "Dati anonimizzati per scopi statistici (senza identificazione personale)",
    ],
    retentionPeriodTitle: "Periodo di Conservazione",
    retentionPeriodDesc:
      "Dopo la conferma della richiesta, i tuoi dati personali saranno eliminati entro 30 giorni. I dati finanziari vengono conservati fino a 5 anni come richiesto dalla legge. I dati anonimizzati possono essere conservati indefinitamente per scopi statistici.",
    formTitle: "Richiedi Eliminazione Account",
    formSubtitle:
      "Compila il modulo sottostante. Il nostro team ti contatterà entro 24 ore.",
    formName: "Nome Completo",
    formNamePlaceholder: "Il tuo nome completo",
    formEmail: "E-mail dell'Account",
    formEmailPlaceholder: "e-mail registrata su Portal Orbita",
    formReason: "Motivo dell'Eliminazione",
    formReasonPlaceholder: "Seleziona un motivo",
    formReasonOptions: [
      { value: "privacy", label: "Privacy e protezione dei dati" },
      { value: "no_longer_use", label: "Non uso più l'app" },
      { value: "switching", label: "Passaggio a un altro servizio" },
      { value: "dissatisfied", label: "Insoddisfazione del servizio" },
      { value: "technical", label: "Problemi tecnici" },
      { value: "other", label: "Altro motivo" },
    ],
    formConfirm:
      "Capisco che questa azione è irreversibile e che tutti i miei dati saranno eliminati definitivamente.",
    formSubmit: "Invia Richiesta di Eliminazione",
    formSubmitting: "Invio in corso...",
    formSuccess: "Richiesta Inviata con Successo!",
    formSuccessDesc:
      "Abbiamo ricevuto la tua richiesta di eliminazione account. Riceverai a breve un'e-mail di conferma all'indirizzo fornito. Il nostro team elaborerà la tua richiesta entro 30 giorni lavorativi.",
    formError: "Errore di Invio",
    formErrorDesc:
      "Impossibile inviare la tua richiesta. Riprova o contattaci direttamente all'indirizzo unterstutzung.service@gmail.com",
    formRequired: "Questo campo è obbligatorio",
    formEmailInvalid: "Inserisci un indirizzo e-mail valido",
    formConfirmRequired: "Devi confermare per procedere",
    warningTitle: "Attenzione: Azione Irreversibile",
    warningDesc:
      "L'eliminazione dell'account è permanente e non può essere annullata. Prima di procedere, considera:",
    warningItems: [
      "Tutti i tuoi dati astrologici e temi saranno persi definitivamente",
      "Gli abbonamenti attivi devono essere cancellati separatamente tramite Stripe",
      "Non sarà possibile recuperare la cronologia delle consultazioni e letture",
      "Un nuovo account con la stessa e-mail può essere creato, ma senza i dati precedenti",
    ],
    footerRights: "Tutti i diritti riservati.",
    footerPrivacy: "Informativa sulla Privacy",
    footerTerms: "Termini di Servizio",
    footerContact: "Contatto",
    footerSupport: "Supporto",
  },
  ja: {
    pageTitle: "Portal Orbita — アカウント削除",
    pageDescription: "Portal Orbitaのアカウントとデータの削除をリクエストします。",
    appName: "Portal Orbita",
    developerName: "Portal Orbita S.A.",
    heroTitle: "アカウントを削除する",
    heroSubtitle:
      "いつでもアカウントと関連するすべてのデータの永久削除をリクエストできます。",
    stepsTitle: "削除のリクエスト方法",
    stepsSubtitle:
      "以下の手順に従って、Portal Orbitaアカウントの削除をリクエストしてください。",
    step1Title: "フォームに記入する",
    step1Desc:
      "氏名、アカウントに登録されたメールアドレス、削除の理由を入力してください。",
    step2Title: "メールによる確認",
    step2Desc:
      "24時間以内に最終手順を記載した確認メールが届きます。",
    step3Title: "処理",
    step3Desc:
      "確認後、30営業日以内にチームがリクエストを処理します。",
    step4Title: "削除完了",
    step4Desc: "削除が完了すると通知が届きます。",
    dataTitle: "データの取り扱いについて",
    dataSubtitle:
      "削除されるデータと保持される可能性があるデータについての完全な透明性。",
    deletedDataTitle: "永久に削除されるデータ",
    deletedDataItems: [
      "プロフィールと個人情報（名前、生年月日、出生地）",
      "出生チャートとカスタム設定",
      "相談履歴とタロット読み",
      "アプリの設定と好み",
      "アプリ内の使用データとアクティビティ",
      "サブスクリプションと支払い履歴（支払いデータはStripeが管理）",
    ],
    retainedDataTitle: "一時的に保持されるデータ",
    retainedDataItems: [
      "財務・請求記録（法的要件 — 5年間）",
      "セキュリティと不正防止ログ（90日間）",
      "統計目的の匿名化データ（個人識別なし）",
    ],
    retentionPeriodTitle: "保持期間",
    retentionPeriodDesc:
      "リクエストの確認後、個人データは30日以内に削除されます。財務データは法律の要件に従い最大5年間保持されます。匿名化されたデータは統計目的で無期限に保持される場合があります。",
    formTitle: "アカウント削除のリクエスト",
    formSubtitle:
      "以下のフォームに記入してください。チームは24時間以内にご連絡します。",
    formName: "氏名",
    formNamePlaceholder: "氏名を入力してください",
    formEmail: "アカウントのメールアドレス",
    formEmailPlaceholder: "Portal Orbitaに登録したメールアドレス",
    formReason: "削除の理由",
    formReasonPlaceholder: "理由を選択してください",
    formReasonOptions: [
      { value: "privacy", label: "プライバシーとデータ保護" },
      { value: "no_longer_use", label: "アプリを使用しなくなった" },
      { value: "switching", label: "別のサービスへの移行" },
      { value: "dissatisfied", label: "サービスへの不満" },
      { value: "technical", label: "技術的な問題" },
      { value: "other", label: "その他の理由" },
    ],
    formConfirm:
      "この操作は取り消せず、すべてのデータが永久に削除されることを理解しています。",
    formSubmit: "削除リクエストを送信",
    formSubmitting: "送信中...",
    formSuccess: "リクエストが正常に送信されました！",
    formSuccessDesc:
      "アカウント削除のリクエストを受け付けました。入力したアドレスに確認メールが届きます。チームは30営業日以内にリクエストを処理します。",
    formError: "送信エラー",
    formErrorDesc:
      "リクエストを送信できませんでした。再試行するか、unterstutzung.service@gmail.comまで直接ご連絡ください。",
    formRequired: "このフィールドは必須です",
    formEmailInvalid: "有効なメールアドレスを入力してください",
    formConfirmRequired: "続行するには確認が必要です",
    warningTitle: "警告：取り消せない操作",
    warningDesc:
      "アカウントの削除は永久的で元に戻せません。続行する前に考慮してください：",
    warningItems: [
      "すべての占星術データとチャートが永久に失われます",
      "有効なサブスクリプションはStripeから別途キャンセルする必要があります",
      "相談と読みの履歴を復元することはできません",
      "同じメールで新しいアカウントを作成できますが、以前のデータはありません",
    ],
    footerRights: "全著作権所有。",
    footerPrivacy: "プライバシーポリシー",
    footerTerms: "利用規約",
    footerContact: "お問い合わせ",
    footerSupport: "サポート",
  },
  ko: {
    pageTitle: "Portal Orbita — 계정 삭제",
    pageDescription: "Portal Orbita 계정 및 데이터 삭제를 요청하세요.",
    appName: "Portal Orbita",
    developerName: "Portal Orbita S.A.",
    heroTitle: "내 계정 삭제",
    heroSubtitle:
      "언제든지 계정 및 관련된 모든 데이터의 영구 삭제를 요청할 수 있습니다.",
    stepsTitle: "삭제 요청 방법",
    stepsSubtitle:
      "아래 단계를 따라 Portal Orbita 계정 삭제를 요청하세요.",
    step1Title: "양식 작성",
    step1Desc:
      "이름, 계정에 등록된 이메일, 삭제 이유를 입력하세요.",
    step2Title: "이메일 확인",
    step2Desc:
      "24시간 이내에 최종 지침이 담긴 확인 이메일을 받게 됩니다.",
    step3Title: "처리",
    step3Desc:
      "팀이 확인 후 30 영업일 이내에 요청을 처리합니다.",
    step4Title: "삭제 완료",
    step4Desc: "삭제가 완료되면 알림을 받게 됩니다.",
    dataTitle: "데이터 처리 방법",
    dataSubtitle:
      "삭제되는 데이터와 보관될 수 있는 데이터에 대한 완전한 투명성.",
    deletedDataTitle: "영구 삭제되는 데이터",
    deletedDataItems: [
      "프로필 및 개인 정보 (이름, 생년월일, 출생지)",
      "출생 차트 및 맞춤 설정",
      "상담 기록 및 타로 리딩",
      "앱 환경 설정 및 설정",
      "앱 내 사용 데이터 및 활동",
      "구독 및 결제 기록 (결제 데이터는 Stripe에서 관리)",
    ],
    retainedDataTitle: "일시적으로 보관되는 데이터",
    retainedDataItems: [
      "재무 및 청구 기록 (법적 요건 — 5년)",
      "보안 및 사기 방지 로그 (90일)",
      "통계 목적의 익명화된 데이터 (개인 식별 없음)",
    ],
    retentionPeriodTitle: "보관 기간",
    retentionPeriodDesc:
      "요청 확인 후 개인 데이터는 30일 이내에 삭제됩니다. 재무 데이터는 법적 요건에 따라 최대 5년간 보관됩니다. 익명화된 데이터는 통계 목적으로 무기한 보관될 수 있습니다.",
    formTitle: "계정 삭제 요청",
    formSubtitle:
      "아래 양식을 작성하세요. 팀이 24시간 이내에 연락드립니다.",
    formName: "이름",
    formNamePlaceholder: "이름을 입력하세요",
    formEmail: "계정 이메일",
    formEmailPlaceholder: "Portal Orbita에 등록된 이메일",
    formReason: "삭제 이유",
    formReasonPlaceholder: "이유를 선택하세요",
    formReasonOptions: [
      { value: "privacy", label: "개인 정보 보호 및 데이터 보안" },
      { value: "no_longer_use", label: "앱을 더 이상 사용하지 않음" },
      { value: "switching", label: "다른 서비스로 전환" },
      { value: "dissatisfied", label: "서비스에 대한 불만족" },
      { value: "technical", label: "기술적 문제" },
      { value: "other", label: "기타 이유" },
    ],
    formConfirm:
      "이 작업은 되돌릴 수 없으며 모든 데이터가 영구적으로 삭제된다는 것을 이해합니다.",
    formSubmit: "삭제 요청 제출",
    formSubmitting: "제출 중...",
    formSuccess: "요청이 성공적으로 제출되었습니다!",
    formSuccessDesc:
      "계정 삭제 요청을 받았습니다. 제공된 주소로 곧 확인 이메일을 받게 됩니다. 팀이 30 영업일 이내에 요청을 처리합니다.",
    formError: "제출 오류",
    formErrorDesc:
      "요청을 제출할 수 없습니다. 다시 시도하거나 unterstutzung.service@gmail.com으로 직접 문의하세요.",
    formRequired: "이 필드는 필수입니다",
    formEmailInvalid: "유효한 이메일 주소를 입력하세요",
    formConfirmRequired: "계속하려면 확인해야 합니다",
    warningTitle: "경고: 되돌릴 수 없는 작업",
    warningDesc:
      "계정 삭제는 영구적이며 취소할 수 없습니다. 계속하기 전에 고려하세요:",
    warningItems: [
      "모든 점성술 데이터와 차트가 영구적으로 손실됩니다",
      "활성 구독은 Stripe를 통해 별도로 취소해야 합니다",
      "상담 및 리딩 기록을 복구하는 것은 불가능합니다",
      "동일한 이메일로 새 계정을 만들 수 있지만 이전 데이터는 없습니다",
    ],
    footerRights: "모든 권리 보유.",
    footerPrivacy: "개인 정보 보호 정책",
    footerTerms: "서비스 약관",
    footerContact: "연락처",
    footerSupport: "지원",
  },
  zh: {
    pageTitle: "Portal Orbita — 删除账户",
    pageDescription: "申请删除您的 Portal Orbita 账户和数据。",
    appName: "Portal Orbita",
    developerName: "Portal Orbita S.A.",
    heroTitle: "删除我的账户",
    heroSubtitle: "您可以随时申请永久删除您的账户及所有相关数据。",
    stepsTitle: "如何申请删除",
    stepsSubtitle: "按照以下步骤申请删除您的 Portal Orbita 账户。",
    step1Title: "填写表格",
    step1Desc: "提供您的全名、账户注册的电子邮件地址以及删除原因。",
    step2Title: "电子邮件确认",
    step2Desc: "您将在 24 小时内收到一封包含最终说明的确认电子邮件。",
    step3Title: "处理",
    step3Desc: "我们的团队将在确认后 30 个工作日内处理您的申请。",
    step4Title: "删除完成",
    step4Desc: "删除完成后，您将收到通知。",
    dataTitle: "您的数据会发生什么",
    dataSubtitle: "完全透明地说明哪些数据会被删除，哪些可能会被保留。",
    deletedDataTitle: "永久删除的数据",
    deletedDataItems: [
      "个人资料和个人信息（姓名、出生日期、出生城市）",
      "出生星盘和个性化设置",
      "咨询历史和塔罗牌解读",
      "应用程序偏好和设置",
      "应用内使用数据和活动",
      "订阅和付款历史（付款数据由 Stripe 管理）",
    ],
    retainedDataTitle: "临时保留的数据",
    retainedDataItems: [
      "财务和账单记录（法律要求 — 5 年）",
      "安全和防欺诈日志（90 天）",
      "用于统计目的的匿名数据（无个人识别）",
    ],
    retentionPeriodTitle: "保留期限",
    retentionPeriodDesc:
      "申请确认后，您的个人数据将在 30 天内删除。财务数据根据法律要求保留最多 5 年。匿名数据可能会无限期保留用于统计目的。",
    formTitle: "申请删除账户",
    formSubtitle: "填写以下表格。我们的团队将在 24 小时内与您联系。",
    formName: "全名",
    formNamePlaceholder: "您的全名",
    formEmail: "账户电子邮件",
    formEmailPlaceholder: "在 Portal Orbita 注册的电子邮件",
    formReason: "删除原因",
    formReasonPlaceholder: "选择原因",
    formReasonOptions: [
      { value: "privacy", label: "隐私和数据保护" },
      { value: "no_longer_use", label: "我不再使用该应用" },
      { value: "switching", label: "切换到其他服务" },
      { value: "dissatisfied", label: "对服务不满意" },
      { value: "technical", label: "技术问题" },
      { value: "other", label: "其他原因" },
    ],
    formConfirm: "我理解此操作不可逆，我的所有数据将被永久删除。",
    formSubmit: "提交删除申请",
    formSubmitting: "提交中...",
    formSuccess: "申请提交成功！",
    formSuccessDesc:
      "我们已收到您的账户删除申请。您将很快在提供的地址收到确认电子邮件。我们的团队将在 30 个工作日内处理您的申请。",
    formError: "提交错误",
    formErrorDesc:
      "无法提交您的申请。请重试或直接联系 unterstutzung.service@gmail.com",
    formRequired: "此字段为必填项",
    formEmailInvalid: "请输入有效的电子邮件地址",
    formConfirmRequired: "您必须确认才能继续",
    warningTitle: "警告：不可逆操作",
    warningDesc: "账户删除是永久性的，无法撤销。在继续之前，请考虑：",
    warningItems: [
      "您所有的占星数据和星盘将永久丢失",
      "活跃订阅必须通过 Stripe 单独取消",
      "将无法恢复咨询和解读历史",
      "可以使用相同的电子邮件创建新账户，但没有之前的数据",
    ],
    footerRights: "保留所有权利。",
    footerPrivacy: "隐私政策",
    footerTerms: "服务条款",
    footerContact: "联系我们",
    footerSupport: "支持",
  },
  ar: {
    pageTitle: "Portal Orbita — حذف الحساب",
    pageDescription: "اطلب حذف حسابك وبياناتك في Portal Orbita.",
    appName: "Portal Orbita",
    developerName: "Portal Orbita S.A.",
    heroTitle: "حذف حسابي",
    heroSubtitle:
      "يمكنك في أي وقت طلب الحذف الدائم لحسابك وجميع البيانات المرتبطة به.",
    stepsTitle: "كيفية طلب الحذف",
    stepsSubtitle:
      "اتبع الخطوات أدناه لطلب حذف حسابك في Portal Orbita.",
    step1Title: "املأ النموذج",
    step1Desc:
      "أدخل اسمك الكامل والبريد الإلكتروني المسجل في حسابك وسبب الحذف.",
    step2Title: "تأكيد عبر البريد الإلكتروني",
    step2Desc:
      "ستتلقى بريداً إلكترونياً للتأكيد خلال 24 ساعة مع التعليمات النهائية.",
    step3Title: "المعالجة",
    step3Desc:
      "سيعالج فريقنا طلبك في غضون 30 يوم عمل بعد التأكيد.",
    step4Title: "اكتمال الحذف",
    step4Desc: "ستتلقى إشعاراً عند اكتمال الحذف.",
    dataTitle: "ماذا يحدث لبياناتك",
    dataSubtitle:
      "شفافية كاملة حول البيانات التي يتم حذفها وتلك التي قد يتم الاحتفاظ بها.",
    deletedDataTitle: "البيانات المحذوفة نهائياً",
    deletedDataItems: [
      "الملف الشخصي والمعلومات الشخصية (الاسم، تاريخ الميلاد، مدينة الميلاد)",
      "خريطة الميلاد والإعدادات المخصصة",
      "سجل الاستشارات وقراءات التاروت",
      "تفضيلات وإعدادات التطبيق",
      "بيانات الاستخدام والنشاط داخل التطبيق",
      "الاشتراكات وسجل المدفوعات (بيانات الدفع تدار بواسطة Stripe)",
    ],
    retainedDataTitle: "البيانات المحتفظ بها مؤقتاً",
    retainedDataItems: [
      "السجلات المالية وسجلات الفوترة (متطلب قانوني — 5 سنوات)",
      "سجلات الأمان ومنع الاحتيال (90 يوماً)",
      "البيانات المجهولة لأغراض إحصائية (بدون تعريف شخصي)",
    ],
    retentionPeriodTitle: "فترة الاحتفاظ",
    retentionPeriodDesc:
      "بعد تأكيد الطلب، سيتم حذف بياناتك الشخصية في غضون 30 يوماً. يتم الاحتفاظ بالبيانات المالية لمدة تصل إلى 5 سنوات وفقاً للمتطلبات القانونية. يمكن الاحتفاظ بالبيانات المجهولة إلى أجل غير مسمى لأغراض إحصائية.",
    formTitle: "طلب حذف الحساب",
    formSubtitle:
      "املأ النموذج أدناه. سيتواصل معك فريقنا خلال 24 ساعة.",
    formName: "الاسم الكامل",
    formNamePlaceholder: "اسمك الكامل",
    formEmail: "بريد الحساب الإلكتروني",
    formEmailPlaceholder: "البريد الإلكتروني المسجل في Portal Orbita",
    formReason: "سبب الحذف",
    formReasonPlaceholder: "اختر سبباً",
    formReasonOptions: [
      { value: "privacy", label: "الخصوصية وحماية البيانات" },
      { value: "no_longer_use", label: "لم أعد أستخدم التطبيق" },
      { value: "switching", label: "التحول إلى خدمة أخرى" },
      { value: "dissatisfied", label: "عدم الرضا عن الخدمة" },
      { value: "technical", label: "مشاكل تقنية" },
      { value: "other", label: "سبب آخر" },
    ],
    formConfirm:
      "أفهم أن هذا الإجراء لا رجعة فيه وأن جميع بياناتي ستُحذف نهائياً.",
    formSubmit: "إرسال طلب الحذف",
    formSubmitting: "جارٍ الإرسال...",
    formSuccess: "تم إرسال الطلب بنجاح!",
    formSuccessDesc:
      "لقد تلقينا طلب حذف حسابك. ستتلقى قريباً بريداً إلكترونياً للتأكيد على العنوان المقدم. سيعالج فريقنا طلبك في غضون 30 يوم عمل.",
    formError: "خطأ في الإرسال",
    formErrorDesc:
      "تعذر إرسال طلبك. يرجى المحاولة مرة أخرى أو التواصل مباشرة على unterstutzung.service@gmail.com",
    formRequired: "هذا الحقل مطلوب",
    formEmailInvalid: "يرجى إدخال عنوان بريد إلكتروني صالح",
    formConfirmRequired: "يجب عليك التأكيد للمتابعة",
    warningTitle: "تحذير: إجراء لا رجعة فيه",
    warningDesc:
      "حذف الحساب دائم ولا يمكن التراجع عنه. قبل المتابعة، ضع في اعتبارك:",
    warningItems: [
      "ستُفقد جميع بياناتك الفلكية وخرائطك نهائياً",
      "يجب إلغاء الاشتراكات النشطة بشكل منفصل عبر Stripe",
      "لن يكون من الممكن استرداد سجل الاستشارات والقراءات",
      "يمكن إنشاء حساب جديد بنفس البريد الإلكتروني، ولكن بدون البيانات السابقة",
    ],
    footerRights: "جميع الحقوق محفوظة.",
    footerPrivacy: "سياسة الخصوصية",
    footerTerms: "شروط الخدمة",
    footerContact: "اتصل بنا",
    footerSupport: "الدعم",
  },
  ru: {
    pageTitle: "Portal Orbita — Удаление аккаунта",
    pageDescription:
      "Запросите удаление вашего аккаунта и данных Portal Orbita.",
    appName: "Portal Orbita",
    developerName: "Portal Orbita S.A.",
    heroTitle: "Удалить мой аккаунт",
    heroSubtitle:
      "Вы можете в любое время запросить постоянное удаление вашего аккаунта и всех связанных данных.",
    stepsTitle: "Как запросить удаление",
    stepsSubtitle:
      "Следуйте приведённым ниже шагам, чтобы запросить удаление вашего аккаунта Portal Orbita.",
    step1Title: "Заполните форму",
    step1Desc:
      "Укажите своё полное имя, электронную почту, зарегистрированную в аккаунте, и причину удаления.",
    step2Title: "Подтверждение по электронной почте",
    step2Desc:
      "В течение 24 часов вы получите письмо с подтверждением и окончательными инструкциями.",
    step3Title: "Обработка",
    step3Desc:
      "Наша команда обработает ваш запрос в течение 30 рабочих дней после подтверждения.",
    step4Title: "Удаление завершено",
    step4Desc: "Вы получите уведомление, когда удаление будет завершено.",
    dataTitle: "Что происходит с вашими данными",
    dataSubtitle:
      "Полная прозрачность относительно того, какие данные удаляются, а какие могут быть сохранены.",
    deletedDataTitle: "Данные, удалённые навсегда",
    deletedDataItems: [
      "Профиль и личная информация (имя, дата рождения, город рождения)",
      "Натальная карта и персонализированные настройки",
      "История запросов и чтений таро",
      "Настройки и предпочтения приложения",
      "Данные об использовании и активности в приложении",
      "Подписки и история платежей (данные о платежах управляются Stripe)",
    ],
    retainedDataTitle: "Временно сохраняемые данные",
    retainedDataItems: [
      "Финансовые записи и записи о выставлении счетов (требование закона — 5 лет)",
      "Журналы безопасности и предотвращения мошенничества (90 дней)",
      "Анонимизированные данные для статистических целей (без личной идентификации)",
    ],
    retentionPeriodTitle: "Срок хранения",
    retentionPeriodDesc:
      "После подтверждения запроса ваши личные данные будут удалены в течение 30 дней. Финансовые данные хранятся до 5 лет в соответствии с требованиями законодательства. Анонимизированные данные могут храниться бессрочно в статистических целях.",
    formTitle: "Запрос на удаление аккаунта",
    formSubtitle:
      "Заполните форму ниже. Наша команда свяжется с вами в течение 24 часов.",
    formName: "Полное имя",
    formNamePlaceholder: "Ваше полное имя",
    formEmail: "Электронная почта аккаунта",
    formEmailPlaceholder: "электронная почта, зарегистрированная в Portal Orbita",
    formReason: "Причина удаления",
    formReasonPlaceholder: "Выберите причину",
    formReasonOptions: [
      { value: "privacy", label: "Конфиденциальность и защита данных" },
      { value: "no_longer_use", label: "Я больше не использую приложение" },
      { value: "switching", label: "Переход на другой сервис" },
      { value: "dissatisfied", label: "Неудовлетворённость сервисом" },
      { value: "technical", label: "Технические проблемы" },
      { value: "other", label: "Другая причина" },
    ],
    formConfirm:
      "Я понимаю, что это действие необратимо и все мои данные будут удалены навсегда.",
    formSubmit: "Отправить запрос на удаление",
    formSubmitting: "Отправка...",
    formSuccess: "Запрос успешно отправлен!",
    formSuccessDesc:
      "Мы получили ваш запрос на удаление аккаунта. Вы скоро получите письмо с подтверждением на указанный адрес. Наша команда обработает ваш запрос в течение 30 рабочих дней.",
    formError: "Ошибка отправки",
    formErrorDesc:
      "Не удалось отправить ваш запрос. Пожалуйста, попробуйте ещё раз или свяжитесь с нами напрямую по адресу unterstutzung.service@gmail.com",
    formRequired: "Это поле обязательно",
    formEmailInvalid: "Пожалуйста, введите действительный адрес электронной почты",
    formConfirmRequired: "Вы должны подтвердить, чтобы продолжить",
    warningTitle: "Предупреждение: необратимое действие",
    warningDesc:
      "Удаление аккаунта является постоянным и не может быть отменено. Прежде чем продолжить, учтите:",
    warningItems: [
      "Все ваши астрологические данные и карты будут безвозвратно утеряны",
      "Активные подписки необходимо отменить отдельно через Stripe",
      "Восстановить историю запросов и чтений будет невозможно",
      "Новый аккаунт с той же электронной почтой можно создать, но без предыдущих данных",
    ],
    footerRights: "Все права защищены.",
    footerPrivacy: "Политика конфиденциальности",
    footerTerms: "Условия использования",
    footerContact: "Контакты",
    footerSupport: "Поддержка",
  },
  hi: {
    pageTitle: "Portal Orbita — खाता हटाएं",
    pageDescription: "अपने Portal Orbita खाते और डेटा को हटाने का अनुरोध करें।",
    appName: "Portal Orbita",
    developerName: "Portal Orbita S.A.",
    heroTitle: "मेरा खाता हटाएं",
    heroSubtitle:
      "आप किसी भी समय अपने खाते और सभी संबंधित डेटा को स्थायी रूप से हटाने का अनुरोध कर सकते हैं।",
    stepsTitle: "हटाने का अनुरोध कैसे करें",
    stepsSubtitle:
      "अपने Portal Orbita खाते को हटाने का अनुरोध करने के लिए नीचे दिए गए चरणों का पालन करें।",
    step1Title: "फ़ॉर्म भरें",
    step1Desc:
      "अपना पूरा नाम, खाते में पंजीकृत ईमेल और हटाने का कारण प्रदान करें।",
    step2Title: "ईमेल पुष्टि",
    step2Desc:
      "आपको 24 घंटों के भीतर अंतिम निर्देशों के साथ एक पुष्टि ईमेल प्राप्त होगी।",
    step3Title: "प्रसंस्करण",
    step3Desc:
      "हमारी टीम पुष्टि के बाद 30 कार्य दिवसों के भीतर आपके अनुरोध को संसाधित करेगी।",
    step4Title: "हटाना पूर्ण",
    step4Desc: "जब हटाना पूर्ण हो जाएगा तो आपको एक सूचना प्राप्त होगी।",
    dataTitle: "आपके डेटा का क्या होता है",
    dataSubtitle:
      "कौन सा डेटा हटाया जाता है और कौन सा रखा जा सकता है, इस पर पूर्ण पारदर्शिता।",
    deletedDataTitle: "स्थायी रूप से हटाया गया डेटा",
    deletedDataItems: [
      "प्रोफ़ाइल और व्यक्तिगत जानकारी (नाम, जन्म तिथि, जन्म स्थान)",
      "जन्म कुंडली और व्यक्तिगत सेटिंग्स",
      "परामर्श इतिहास और टैरो रीडिंग",
      "ऐप प्राथमिकताएं और सेटिंग्स",
      "ऐप में उपयोग डेटा और गतिविधि",
      "सदस्यता और भुगतान इतिहास (भुगतान डेटा Stripe द्वारा प्रबंधित)",
    ],
    retainedDataTitle: "अस्थायी रूप से रखा गया डेटा",
    retainedDataItems: [
      "वित्तीय और बिलिंग रिकॉर्ड (कानूनी आवश्यकता — 5 वर्ष)",
      "सुरक्षा और धोखाधड़ी रोकथाम लॉग (90 दिन)",
      "सांख्यिकीय उद्देश्यों के लिए अनाम डेटा (कोई व्यक्तिगत पहचान नहीं)",
    ],
    retentionPeriodTitle: "प्रतिधारण अवधि",
    retentionPeriodDesc:
      "अनुरोध की पुष्टि के बाद, आपका व्यक्तिगत डेटा 30 दिनों के भीतर हटा दिया जाएगा। वित्तीय डेटा कानूनी आवश्यकताओं के अनुसार 5 साल तक रखा जाता है। अनाम डेटा सांख्यिकीय उद्देश्यों के लिए अनिश्चित काल तक रखा जा सकता है।",
    formTitle: "खाता हटाने का अनुरोध करें",
    formSubtitle:
      "नीचे दिया गया फ़ॉर्म भरें। हमारी टीम 24 घंटों के भीतर आपसे संपर्क करेगी।",
    formName: "पूरा नाम",
    formNamePlaceholder: "आपका पूरा नाम",
    formEmail: "खाता ईमेल",
    formEmailPlaceholder: "Portal Orbita में पंजीकृत ईमेल",
    formReason: "हटाने का कारण",
    formReasonPlaceholder: "एक कारण चुनें",
    formReasonOptions: [
      { value: "privacy", label: "गोपनीयता और डेटा सुरक्षा" },
      { value: "no_longer_use", label: "मैं अब ऐप का उपयोग नहीं करता" },
      { value: "switching", label: "किसी अन्य सेवा पर स्विच करना" },
      { value: "dissatisfied", label: "सेवा से असंतोष" },
      { value: "technical", label: "तकनीकी समस्याएं" },
      { value: "other", label: "अन्य कारण" },
    ],
    formConfirm:
      "मैं समझता हूं कि यह क्रिया अपरिवर्तनीय है और मेरा सारा डेटा स्थायी रूप से हटा दिया जाएगा।",
    formSubmit: "हटाने का अनुरोध सबमिट करें",
    formSubmitting: "सबमिट हो रहा है...",
    formSuccess: "अनुरोध सफलतापूर्वक सबमिट किया गया!",
    formSuccessDesc:
      "हमें आपका खाता हटाने का अनुरोध प्राप्त हुआ है। आपको प्रदान किए गए पते पर जल्द ही एक पुष्टि ईमेल प्राप्त होगी। हमारी टीम 30 कार्य दिवसों के भीतर आपके अनुरोध को संसाधित करेगी।",
    formError: "सबमिशन त्रुटि",
    formErrorDesc:
      "आपका अनुरोध सबमिट नहीं हो सका। कृपया पुनः प्रयास करें या सीधे unterstutzung.service@gmail.com पर संपर्क करें",
    formRequired: "यह फ़ील्ड आवश्यक है",
    formEmailInvalid: "कृपया एक वैध ईमेल पता दर्ज करें",
    formConfirmRequired: "आगे बढ़ने के लिए आपको पुष्टि करनी होगी",
    warningTitle: "चेतावनी: अपरिवर्तनीय क्रिया",
    warningDesc:
      "खाता हटाना स्थायी है और इसे पूर्ववत नहीं किया जा सकता। आगे बढ़ने से पहले विचार करें:",
    warningItems: [
      "आपका सारा ज्योतिषीय डेटा और चार्ट स्थायी रूप से खो जाएगा",
      "सक्रिय सदस्यता को Stripe के माध्यम से अलग से रद्द किया जाना चाहिए",
      "परामर्श और रीडिंग इतिहास को पुनर्प्राप्त करना संभव नहीं होगा",
      "उसी ईमेल से एक नया खाता बनाया जा सकता है, लेकिन पिछले डेटा के बिना",
    ],
    footerRights: "सर्वाधिकार सुरक्षित।",
    footerPrivacy: "गोपनीयता नीति",
    footerTerms: "सेवा की शर्तें",
    footerContact: "संपर्क",
    footerSupport: "सहायता",
  },
};

function detectLocale(): SupportedLocale {
  const browserLang =
    navigator.language ||
    (navigator as unknown as { userLanguage?: string }).userLanguage ||
    "en";
  const lang = browserLang.toLowerCase().split("-")[0];

  const supported: SupportedLocale[] = [
    "pt",
    "en",
    "es",
    "fr",
    "de",
    "it",
    "ja",
    "ko",
    "zh",
    "ar",
    "ru",
    "hi",
  ];
  if (supported.includes(lang as SupportedLocale)) {
    return lang as SupportedLocale;
  }
  return "en";
}

export function getTranslations(): Translations {
  const locale = detectLocale();
  return translations[locale];
}

export function getLocale(): SupportedLocale {
  return detectLocale();
}

export const isRTL = (locale: SupportedLocale) => locale === "ar";
