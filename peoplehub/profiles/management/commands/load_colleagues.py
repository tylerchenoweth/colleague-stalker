from django.core.management.base import BaseCommand
from django.core.management import call_command

class Command(BaseCommand):
    help = 'Loads fixture data for Colleague model from profiles/fixtures/Colleague.json'

    def handle(self, *args, **kwargs):
        try:
            call_command('loaddata', 'profiles/fixtures/Colleague.json')
            self.stdout.write(self.style.SUCCESS('Successfully loaded Colleague fixture data.'))
        except Exception as e:
            self.stderr.write(self.style.ERROR(f'Failed to load data: {e}'))
